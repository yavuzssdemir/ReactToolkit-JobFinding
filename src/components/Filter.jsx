import React from "react";
import { sortOptions, typeOptions, statusOptions } from "../constants";
import {
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
  clearFilters,
} from "../redux/jobSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  // input her değiştiğinde çalışır
  const handleSearch = (e) => {
    dispatch(filterBySearch(e.target.value));
  };

  // durum selecti değişince çalışır
  const handleStatus = (e) => {
    dispatch(filterByStatus(e.target.value));
  };

  // type selecti değişince çalışır
  const handleType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  // sırlamayı ele alır
  const handleSort = (e) => {
    dispatch(sortJobs(e.target.value));
  };

  return (
    <section className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form>
        <div className="field">
          <label>Arama</label>
          <input type="text" onChange={handleSearch} />
        </div>
        <div className="field">
          <label>Durum</label>
          <select onChange={handleStatus}>
            <option hidden>Seçiniz</option>
            {statusOptions.map((opt, i) => (
              <option key={i}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Tip</label>
          <select onChange={handleType}>
            <option hidden>Seçiniz</option>
            {typeOptions.map((opt, i) => (
              <option key={i}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Sırala</label>
          <select onChange={handleSort}>
            {sortOptions.map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </select>
        </div>

        <button type="button" onClick={() => dispatch(clearFilters())}>
          Filtreleri Temizle
        </button>
      </form>
    </section>
  );
};

export default Filter;
