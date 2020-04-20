import React, { Component } from "react";

import "./card.styles.css";

export function Card({ item }) {
  console.log(item);
  return (
    <div className="card">
    <img alt="mosnter" src={`https://robohash.org/${item.id}`} />
      <div class="card_title title-shadow">
        <p key={item.id}>{item.title}</p>
      </div>
    </div>
  );
}
