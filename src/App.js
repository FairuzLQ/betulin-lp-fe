// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Karir from './pages/Karir';
import KarirDetail from './pages/KarirDetail';
import SyaratKetentuan from './pages/SyaratKetentuan';
import KebijakanPrivasi from './pages/KebijakanPrivasi';
import Layanan from './pages/Layanan';
import Blog from './pages/Blog';
import BlogKategori from './pages/BlogKategori';
import BlogPost from './pages/BlogPost';
import TentangKami from './pages/TentangKami';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/karir-detail/:documentId" element={<KarirDetail />} /> {/* Updated route */}
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-kategori/:categorySlug" element={<BlogKategori />} />
          <Route path="/blog-post/:documentId" element={<BlogPost />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
