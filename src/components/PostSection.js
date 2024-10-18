import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa'; // Font Awesome Icons
import '../styles/PostSection.css'; // Custom CSS for PostSection

const PostSection = () => {
  // Dummy Data for a single post
  const selectedPost = {
    id: 1,
    category: 'Home Improvement',
    title: '5 Tips for Home Improvement',
    content: 'Detailed content about improving your home, covering tips, tools, and suggestions on how to do DIY repairs and renovations.',
    tags: ['DIY', 'Home', 'Renovation'],
    author: 'admin',
    date: 'Rabu, 12 Oktober 2024',
    image: 'https://via.placeholder.com/300x200?text=Home+Improvement',
    imageSource: 'Pexels',
  };

  // Dummy Data for trending posts
  const trendingPosts = [
    { id: 1, title: "Maximizing Small Spaces", author: "admin", date: "Jumat, 14 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Small+Spaces" },
    { id: 2, title: "Choosing the Best Paint Colors", author: "admin", date: "Kamis, 13 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Paint+Colors" },
    { id: 3, title: "The Future of Smart Homes", author: "admin", date: "Sabtu, 15 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Smart+Homes" },
  ];

  return (
    <section className="post-section-page">
      <div className="post-section-content-wrapper">
        {/* Left Side: Detailed Post Section */}
        <div className="post-section-left">
          {/* Category */}
          <p className="post-section-category">{selectedPost.category}</p>
          
          {/* Title */}
          <h1 className="post-section-title">{selectedPost.title}</h1>

          {/* Featured Image */}
          <div className="post-section-image-container">
            <img src={selectedPost.image} alt={selectedPost.title} className="post-section-featured-image" />
            <p className="post-section-image-source">Source: {selectedPost.imageSource}</p>
          </div>

          {/* Author and Date */}
          <div className="post-section-meta">
            <p>
              By {selectedPost.author} | {selectedPost.date}
            </p>
            <div className="post-section-share-post">
              <FaShareAlt /> <span>Share this post</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-section-content">
            <p>{selectedPost.content}</p>
          </div>

          {/* Tags */}
          <div className="post-section-tags">
            {selectedPost.tags.map((tag, index) => (
              <span key={index} className="post-section-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Trending Posts, Social Media, Banners */}
        <div className="post-section-right">
          {/* Trending Posts */}
          <div className="post-section-trending-posts">
            <h3>Post Terpopuler</h3>
            {trendingPosts.map((post) => (
              <div className="post-section-trending-post" key={post.id}>
                <img src={post.image} alt={post.title} className="post-section-trending-post-image" />
                <div className="post-section-trending-post-details">
                  <h4>{post.title}</h4>
                  <p className="author-date">{post.author} | {post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="post-section-social-media-section">
            <h3>Follow Us</h3>
            <ul className="post-section-social-media-list">
              <li><FaFacebook /> <a href="https://facebook.com">Facebook</a></li>
              <li><FaTwitter /> <a href="https://twitter.com">Twitter</a></li>
              <li><FaInstagram /> <a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>

          {/* Banners */}
          <div className="post-section-banner-section">
            <div className="post-section-banner">
              <h4>Special Offers!</h4>
              <a href="/offers" className="post-section-banner-btn">Check Offers</a>
            </div>
            <div className="post-section-banner">
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
