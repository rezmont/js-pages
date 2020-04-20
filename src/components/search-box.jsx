import React, { Component } from "react";
import "./search-box.styles.css";

export function SearchBox({ placeholder, handleChange }) {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
