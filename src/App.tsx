/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Reviews from "./components/Reviews";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-clinic-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Reviews />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

