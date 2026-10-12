import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Properties from './components/Properties';
import Discover from './components/Discover';
import CustomCursor from './components/CustomCursor';
import Capabilities from './components/Capabilities';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <div className="content-wrapper">
        <Stats />
        <Properties />
        <Discover />
        <Capabilities />
        <Blogs />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
