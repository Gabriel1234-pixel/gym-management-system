import About from "@/components/About";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Trainers from "@/components/Trainers";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Membership />
      <Classes />
      <Trainers />
      <Gallery />
      <Products />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}