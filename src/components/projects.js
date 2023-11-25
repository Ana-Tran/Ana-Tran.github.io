import React from "react";
import { motion } from "framer-motion";
import css from "../components/stylesheets/project.css";

export default function projects() {

  const GoToProject1 =() => {
      window.open('https://github.com/Ana-Tran/currency_exchange/tree/main');
  }

  const GoToProject2 = () => {
    window.open('https://main.d33wp2p593d8jl.amplifyapp.com/');

  }
  const GoToProject3 = () => {
    window.open('https://github.com/Ana-Tran/cruddemo/tree/main');

  }

  return (
    <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom" id="projects">Projects</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <motion.div class="col"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div id = "project1" class="card card-cover h-500 overflow-hidden text-bg-dark rounded-4 shadow-lg" onClick = {GoToProject1}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          </div>
        </div>
      </motion.div>

      <motion.div class="col"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >
        <div id = "project2" class="card card-cover h-500 overflow-hidden text-bg-dark rounded-4 shadow-lg" onClick = {GoToProject2}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          </div>
        </div>
      </motion.div>

      <motion.div class="col"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >
        <div id = "project3" class="card card-cover h-500 overflow-hidden text-bg-dark rounded-4 shadow-lg" onClick = {GoToProject3}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
}
