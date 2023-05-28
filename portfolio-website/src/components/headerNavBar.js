import React from "react";


export default function headerNavBar() {
  return (
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#home" class="nav-link " aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
