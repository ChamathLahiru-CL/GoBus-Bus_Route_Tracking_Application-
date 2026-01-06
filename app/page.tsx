import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Features />
      <Footer />
    </div>
  );
}
