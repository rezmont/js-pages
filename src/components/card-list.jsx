import React, { Component } from "react";
import { Card } from "./card";
import "./card.styles.css";

export function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((el) => (
        <Card item={el} />
      ))}
    </div>
  );
}
