import React from "react";
import { About, Footer, Hero, Navbar, Projects } from ".";
export default function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <body>
        <Projects />
        <About/>
      </body>
      <Footer />
    </div>
  );
}
