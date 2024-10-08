import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Karir from './pages/Karir';
import KarirDetail from './pages/KarirDetail';
import SyaratKetentuan from './pages/SyaratKetentuan';
import Layanan from './pages/Layanan';
import Blog from './pages/Blog';
import BlogKategori from './pages/BlogKategori';
import BlogPost from './pages/BlogPost';
import TentangKami from './pages/TentangKami';
import './styles/global.css'; // Impor CSS global

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar akan tampil di semua halaman */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/karir-detail" element={<KarirDetail />} />
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-kategori" element={<BlogKategori />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
        <Footer /> {/* Footer akan tampil di semua halaman */}
      </div>
    </Router>
  );
}

export default App;
