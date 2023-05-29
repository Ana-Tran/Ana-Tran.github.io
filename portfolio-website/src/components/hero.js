import React from "react";
import logo from "../assets/logo.png";
import resume from "../resources/Ana_Tran_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

export default function hero() {
  const downloadResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div class="px-4 py-5 my-5 text-center" id="about">
      <img
        class="d-block mx-auto mb-4"
        src={logo}
        alt="pom pom purin eating"
        width="150"
        height="150"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">Ana Tran</h1>
      <h4 class="display-10">
        <TypeAnimation
          sequence={[
            "I am a problem-solver",
            900,
            "I am a developer",
            900,
            "I am a gamer",
            1300,
          ]}
          speed={30}
          repeat={Infinity}
        />
      </h4>
      <div class="col-lg-6 mx-auto">
        {/* <p class="lead mb-4">
          Hi, my name is Ana and I am a new graduate looking for software
          developer roles. I am a driven and passionate individual who is eager
          to begin my career. I am currently learning react, python, and
          flutter. I am excited to bring my skills and enthusiasm to a new role
          and look forward to the opportunity to grow and learn in a dynamic
          work environment.
        </p> */}
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
            onClick={downloadResume}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
