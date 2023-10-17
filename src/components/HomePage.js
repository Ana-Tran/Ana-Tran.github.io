import React from "react";
import { About, Contact, Footer, Hero, Navbar, Projects } from ".";
export default function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <body>
        <Projects />
        <About/>
        <Contact/>
      </body>
      <Footer />
    </div>
  );
}
