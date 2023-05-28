import React from "react";
import { Footer, Hero, Navbar, Projects } from ".";
export default function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <body>
        <Projects />
      </body>
      <Footer />
    </div>
  );
}
