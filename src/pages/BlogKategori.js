import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaDiscord, FaSpotify } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/BlogKategori.css';
import { useParams, Link } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';

const BlogKategori = () => {
  const { categorySlug } = useParams();
  const [posts, setPosts] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = process.env.REACT_APP_API_URL || '';
  const postsPerPage = 3;
  const { showLoading, hideLoading } = useLoading();

  const formatCategoryTitle = (slug) => {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formattedCategoryName = formatCategoryTitle(categorySlug);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      showLoading();
      try {
        const response = await fetch(`${apiUrl}/api/artikels?filters[kategori_artikel][SlugKategori][$eq]=${categorySlug}&populate=*`);
        const data = await response.json();
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category posts:', error);
        setLoading(false);
      }
      hideLoading();
    };

    fetchCategoryPosts();
  }, [categorySlug, apiUrl]);

  useEffect(() => {
    const fetchRandomArticles = async () => {
      try {
        const totalResponse = await fetch(`${apiUrl}/api/artikels?pagination[pageSize]=1`);
        const totalData = await totalResponse.json();
        const totalArticles = totalData.meta.pagination.total;
        const totalPages = Math.ceil(totalArticles / 3);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;

        const response = await fetch(
          `${apiUrl}/api/artikels?populate=*&pagination[page]=${randomPage}&pagination[pageSize]=3`
        );
        const data = await response.json();
        setRandomArticles(data.data);
      } catch (error) {
        console.error('Error fetching random articles:', error);
      }
    };

    fetchRandomArticles();
  }, [apiUrl]);

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/social-media-footers`);
        const data = await response.json();
        setSocialMediaLinks(data.data);
      } catch (error) {
        console.error('Error fetching social media links:', error);
      }
    };

    fetchSocialMediaLinks();
  }, [apiUrl]);

  const getSocialMediaIcon = (socialMedia) => {
    switch (socialMedia) {
      case 'threads':
        return <FaFacebook className="social-icon" />;
      case 'twitter':
        return <FaTwitter className="social-icon" />;
      case 'instagram':
        return <FaInstagram className="social-icon" />;
      case 'youtube':
        return <FaYoutube className="social-icon" />;
      case 'tiktok':
        return <FaTiktok className="social-icon" />;
      case 'whatsapp':
        return <FaWhatsapp className="social-icon" />;
      case 'discord':
        return <FaDiscord className="social-icon" />;
      case 'spotify':
        return <FaSpotify className="social-icon" />;
      default:
        return null;
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return <p>Loading posts for {formattedCategoryName}...</p>;
  }

  return (
    <section className="blog-kategori-section">
      <div className="blog-kategori-header" data-aos="fade-up">
        <h2>{formattedCategoryName}</h2>
        <div className="blog-kategori-underline"></div>
      </div>
      <div className="blog-kategori-content-wrapper" data-aos="fade-up">
        <div className="blog-kategori-left">
          <div className="blog-kategori-post-cards">
            {currentPosts.map((post, index) => (
              <div
                className="blog-kategori-post-card"
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <img
                  src={`${apiUrl}${post.FeaturedImage?.formats?.small?.url || post.FeaturedImage?.url}`}
                  alt={post.TitleArtikel}
                  className="blog-kategori-post-image"
                />
                <div className="blog-kategori-post-details">
                  <h2>
                    <Link to={`/blog-post/${post.ArtikelSlug}`}>{post.TitleArtikel}</Link>
                  </h2>
                  <p className="author-date">
                    {post.penulis_artikel?.NamaPenulis} | {new Date(post.TglArtikel).toLocaleDateString()}
                  </p>
                  <p className="excerpt-post-category">
                    {post.ExcerptArtikel?.length > 70
                      ? `${post.ExcerptArtikel.slice(0, 70)}...`
                      : post.ExcerptArtikel}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-kategori-pagination" data-aos="fade-up">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="blog-kategori-right" data-aos="fade-left">
          <div className="trending-posts">
            <h3>Baca Juga Ini</h3>
            {randomArticles.map((post, index) => (
              <Link to={`/blog-post/${post.ArtikelSlug}`} key={post.id} className="trending-post-link">
                <div className="trending-post" data-aos="fade-right" data-aos-delay={`${index * 200}`}>
                  <img
                    src={`${apiUrl}${post.FeaturedImage?.formats?.small?.url || post.FeaturedImage?.url}`}
                    alt={post.TitleArtikel}
                    className="trending-post-image"
                  />
                  <div className="trending-post-details">
                    <h4>{post.TitleArtikel}</h4>
                    <p className="author-date">
                      {post.penulis_artikel?.NamaPenulis} | {new Date(post.TglArtikel).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="social-media-section" data-aos="fade-left">
            <h3>Follow Us</h3>
            <ul className="social-media-list">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <a href={`https://${link.SocialMediaLink}`} target="_blank" rel="noopener noreferrer">
                    {getSocialMediaIcon(link.SocialMedia)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="banner-section" data-aos="fade-left">
            <div className="banner">
              <h4>Kamu Bingung? Hubungi CS Kami</h4>
              <a href="#" className="banner-btn">Hubungi</a>
            </div>
            <div className="banner">
              <h4>Yuk, Download Betulin dan dapatkan voucher menarik!</h4>
              <a href="#" className="banner-btn">Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogKategori;
