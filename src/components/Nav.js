import React from 'react'
import "../styles.css";
import  { useState, useEffect } from "react";

function Nav() {
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
      document.querySelector(".nav-toggle").addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("open");
      });
    }, [isOpen]);
  return (
    <nav>
    <h1>w.</h1>

    <div className={`nav-menu ${isOpen && "open"}`}>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Treding</li>
        <li>Categori</li>
      </ul>
    </div>
    <div
      className={`nav-toggle ${isOpen && "open"}`}
      onClick={() => setisOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  )
}

export default Nav