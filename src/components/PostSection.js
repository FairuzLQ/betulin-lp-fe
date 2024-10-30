import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/PostSection.css';
import { useLoading } from '../contexts/LoadingContext';

const PostSection = ({ post }) => {
  const [randomArticles, setRandomArticles] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || '';
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchRandomArticles = async () => {
      showLoading();
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
      } finally {
        hideLoading();
      }
    };

    fetchRandomArticles();
  }, [apiUrl]);

  if (!post) return null;

  const copyLinkToClipboard = () => {
    const postUrl = window.location.href;
    const postDate = new Date(post.TglArtikel).toLocaleDateString();
    const shareText = `Postingan ini dipublish oleh pihak Betulin dan merupakan properti PT. Rumah Masa Kini. ${postDate}`;
    const textToCopy = `${postUrl}\n\n${shareText}`;

    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Link and message copied to clipboard!"))
      .catch((error) => console.error("Error copying text to clipboard:", error));
  };

  const featuredImageUrl = post.FeaturedImage?.formats?.large?.url
    ? `${apiUrl}${post.FeaturedImage.formats.large.url}`
    : post.FeaturedImage?.url
    ? `${apiUrl}${post.FeaturedImage.url}`
    : null;

  return (
    <section className="post-section-page" data-aos="fade-up">
      <div className="post-section-content-wrapper">
        <div className="post-section-left" data-aos="fade-up">
          <p className="post-section-category">{post.kategori_artikel?.NamaKategori}</p>
          <h1 className="post-section-title">{post.TitleArtikel}</h1>

          {featuredImageUrl && (
            <div className="post-section-image-container" data-aos="zoom-in">
              <img
                src={featuredImageUrl}
                alt={post.TitleArtikel}
                className="post-section-featured-image"
              />
              <div className='post-section-image-source'>Sumber: {post.SumberFoto}</div>
            </div>
          )}

          <div className="post-section-meta" data-aos="fade-up" data-aos-delay="200">
            <p>By {post.penulis_artikel?.NamaPenulis} | {new Date(post.TglArtikel).toLocaleDateString()}</p>
            <div className="post-section-share-post" onClick={copyLinkToClipboard}>
              <FaShareAlt /> <span>Share this post</span>
            </div>
          </div>

          <div className="post-section-content" data-aos="fade-up" data-aos-delay="400">
            {post.DetailArtikel.map((block, index) => (
              <div key={index}>
                <p>{block.children[0].text}</p>
                <br />
              </div>
            ))}
          </div>

          <div className="post-section-tags" data-aos="fade-up" data-aos-delay="600">
            {post.tag_artikels.map((tag, index) => (
              <span key={index} className="post-section-tag">#{tag.NamaTag}</span>
            ))}
          </div>
        </div>

        <div className="post-section-right" data-aos="fade-left">
          <div className="post-section-trending-posts" data-aos="fade-up" data-aos-delay="200">
            <h3>Baca Juga Ini</h3>
            {randomArticles.map((randomPost) => (
              <Link to={`/blog-post/${randomPost.documentId}`} key={randomPost.id} className="post-section-trending-post-link">
                <div className="post-section-trending-post" data-aos="fade-right" data-aos-delay="400">
                  <img
                    src={`${apiUrl}${randomPost.FeaturedImage?.formats?.small?.url || ''}`}
                    alt={randomPost.TitleArtikel}
                    className="post-section-trending-post-image"
                  />
                  <div className="post-section-trending-post-details">
                    <h4>{randomPost.TitleArtikel}</h4>
                    <p className="author-date">
                      {randomPost.penulis_artikel?.NamaPenulis} | {new Date(randomPost.TglArtikel).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="post-section-social-media-section" data-aos="fade-up" data-aos-delay="300">
            <h3>Follow Us</h3>
            <ul className="post-section-social-media-list">
              <li><FaFacebook /> <a href="https://facebook.com">Facebook</a></li>
              <li><FaTwitter /> <a href="https://twitter.com">Twitter</a></li>
              <li><FaInstagram /> <a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>

          <div className="post-section-banner-section">
            <div className="post-section-banner" data-aos="fade-up" data-aos-delay="400">
              <h4>Special Offers!</h4>
              <a href="/offers" className="post-section-banner-btn">Check Offers</a>
            </div>
            <div className="post-section-banner" data-aos="fade-up" data-aos-delay="600">
              <h4>Get a Free Quote!</h4>
              <a href="/quote" className="post-section-banner-btn">Request Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
