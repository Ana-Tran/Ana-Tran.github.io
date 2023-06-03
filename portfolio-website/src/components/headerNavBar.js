import React from "react";

export default function headerNavBar() {
  return (
    <header class="d-flex justify-content-center py-3">
      <nav class="navbar fixed-top navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
