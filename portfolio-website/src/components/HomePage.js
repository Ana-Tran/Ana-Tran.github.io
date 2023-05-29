import React from "react";
import { About, Footer, Hero, Navbar, Projects } from ".";
export default function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <body>
        <About/>
        <Projects />
      </body>
      <Footer />
    </div>
  );
}
