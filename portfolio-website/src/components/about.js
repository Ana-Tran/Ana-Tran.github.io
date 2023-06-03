import React from "react";
import profile from "../assets/profile_pic.jpg";

export default function about() {
  return (
    <div class="container" id="custom-cards">
      <h2 class="pb-2 border-bottom" id="about">About Me</h2>
      <div class="row row-cols-lg-2 justify-content-center py-5">
        <div class="col w-35">
          <img
            class="d-block mx-auto mb-4 rounded-circle"
            src={profile}
            alt="profile_picture"
            width="300"
            height="300"
          />
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <p class="lead mb-4">
            Hi, my name is Ana and I am a new graduate looking for software
            developer roles. I am a driven and passionate individual who is
            eager to begin my career in tech. I am currently learning React.js,
            Python, and Flutter. I am excited to bring my skills and enthusiasm
            to a new role and look forward to the opportunity to grow and learn
            in a dynamic work environment.
          </p>
        </div>
      </div>
    </div>
  );
}
