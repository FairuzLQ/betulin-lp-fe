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

  return (
    <section className="post-section-page" data-aos="fade-up">
      <div className="post-section-content-wrapper">
        {/* Left Side: Detailed Post Section */}
        <div className="post-section-left" data-aos="fade-up">
          {/* Category */}
          <p className="post-section-category">{post.kategori_artikel?.NamaKategori}</p>

          {/* Title */}
          <h1 className="post-section-title">{post.TitleArtikel}</h1>

          {/* Featured Image */}
          <div className="post-section-image-container" data-aos="zoom-in">
            <img
              src={`${process.env.REACT_APP_API_URL}${post.FeaturedImage?.formats?.large?.url}`}
              alt={post.TitleArtikel}
              className="post-section-featured-image"
            />
          </div>

          {/* Author and Date */}
          <div className="post-section-meta" data-aos="fade-up" data-aos-delay="200">
            <p>
              By {post.penulis_artikel?.NamaPenulis} |{' '}
              {new Date(post.TglArtikel).toLocaleDateString()}
            </p>
            <div className="post-section-share-post">
              <FaShareAlt /> <span>Share this post</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-section-content" data-aos="fade-up" data-aos-delay="400">
            {post.DetailArtikel.map((block, index) => (
              <p key={index}>{block.children[0].text}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="post-section-tags" data-aos="fade-up" data-aos-delay="600">
            {post.tag_artikels.map((tag, index) => (
              <span key={index} className="post-section-tag">
                #{tag.NamaTag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
