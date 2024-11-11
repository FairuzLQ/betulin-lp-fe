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
import KontakKami from './pages/KontakKami';
import NotFound from './pages/NotFound'; // Import the NotFound component
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import { LoadingProvider } from './contexts/LoadingContext';
import GlobalLoading from './components/GlobalLoading';

function App() {
  return (
    <LoadingProvider>
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <GlobalLoading />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/karir" element={<Karir />} />
            <Route path="/karir-detail/:documentId" element={<KarirDetail />} />
            <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
            <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-kategori/:categorySlug" element={<BlogKategori />} />
            <Route path="/blog-post/:slug" element={<BlogPost />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/kontak-kami" element={<KontakKami />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LoadingProvider>
  );
}

export default App;
