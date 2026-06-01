import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FlightBookingForm = () => {
  return (
    <div className="container border rounded mt-4 p-4">
      <div
        className="alert alert-warning alert-dismissible fade show rounded-0"
        role="alert"
      >
        &nbsp;
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <h1 className="mb-4">Form đặt vé máy bay</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text bg-white text-secondary">
              <i className="bi bi-person"></i>
            </span>
            <input type="text" className="form-control" />
            <span className="input-group-text bg-light text-secondary">
              vnđ
            </span>
          </div>
          <div className="form-text">Phải nhập 5 ký tự, in hoa....</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input type="text" className="form-control" />
          <div className="form-text">Phải nhập 5 ký tự, in hoa....</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Đi từ</label>
            <select className="form-select text-secondary">
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>Hồ Chí Minh</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Đến</label>
            <select className="form-select text-secondary">
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>Hồ Chí Minh</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label d-block">Chọn chiều đi (Khứ hồi)</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="trip_di"
              id="di"
            />
            <label className="form-check-label" htmlFor="di">
              Đi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="checkbox"
              name="trip_ve"
              id="ve"
            />
            <label className="form-check-label" htmlFor="ve">
              Về
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2">
          Đặt vé
        </button>
      </form>
    </div>
  );
};

export default FlightBookingForm;
