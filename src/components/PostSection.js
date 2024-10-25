import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/PostSection.css';

const PostSection = ({ post }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!post) return null;

  // Copy link function
  const copyLinkToClipboard = () => {
    const postUrl = window.location.href;
    const postDate = new Date(post.TglArtikel).toLocaleDateString();
    const shareText = `Postingan ini dipublish oleh pihak Betulin dan merupakan properti PT. Rumah Masa Kini. ${postDate}`;
    const textToCopy = `${postUrl}\n\n${shareText}`;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Link and message copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  // Dummy Data for trending posts
  const trendingPosts = [
    { id: 1, title: "Maximizing Small Spaces", author: "admin", date: "Jumat, 14 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Small+Spaces" },
    { id: 2, title: "Choosing the Best Paint Colors", author: "admin", date: "Kamis, 13 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Paint+Colors" },
    { id: 3, title: "The Future of Smart Homes", author: "admin", date: "Sabtu, 15 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Smart+Homes" },
  ];

  return (
    <section className="post-section-page" data-aos="fade-up">
      <div className="post-section-content-wrapper">
        <div className="post-section-left" data-aos="fade-up">
          <p className="post-section-category">{post.kategori_artikel?.NamaKategori}</p>
          
          <h1 className="post-section-title">{post.TitleArtikel}</h1>

          {post.FeaturedImage?.formats?.large?.url && (
            <div className="post-section-image-container" data-aos="zoom-in">
              <img
                src={`${process.env.REACT_APP_API_URL}${post.FeaturedImage.formats.large.url}`}
                alt={post.TitleArtikel}
                className="post-section-featured-image"
              />
              <div className='post-section-image-source'>Sumber: Pexels </div>
            </div>
          )}

          <div className="post-section-meta" data-aos="fade-up" data-aos-delay="200">
            <p>
              By {post.penulis_artikel?.NamaPenulis} |{' '}
              {new Date(post.TglArtikel).toLocaleDateString()}
            </p>
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
              <span key={index} className="post-section-tag">
                #{tag.NamaTag}
              </span>
            ))}
          </div>
        </div>

        <div className="post-section-right" data-aos="fade-left">
          <div className="post-section-trending-posts" data-aos="fade-up" data-aos-delay="200">
            <h3>Post Terpopuler</h3>
            {trendingPosts && trendingPosts.map((trendingPost) => (
              <div className="post-section-trending-post" key={trendingPost.id} data-aos="fade-right" data-aos-delay="400">
                <img src={trendingPost.image} alt={trendingPost.title} className="post-section-trending-post-image" />
                <div className="post-section-trending-post-details">
                  <h4>{trendingPost.title}</h4>
                  <p className="author-date">{trendingPost.author} | {trendingPost.date}</p>
                </div>
              </div>
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
