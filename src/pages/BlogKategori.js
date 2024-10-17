import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Font Awesome Icons
import '../styles/BlogKategori.css'; // Custom CSS

const BlogKategori = () => {
  // Dummy Data for blog posts
  const dummyPosts = [
    { id: 1, title: "5 Tips for Home Improvement", excerpt: "Improve your home with these top 5 tips. From DIY repairs to smart renovations, we have you covered.", author: "admin", date: "Rabu, 12 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Home+Improvement" },
    { id: 2, title: "Choosing the Best Paint Colors", excerpt: "Explore the latest trends in paint colors and find the perfect shade to transform your living space.", author: "admin", date: "Kamis, 13 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Paint+Colors" },
    { id: 3, title: "Maximizing Small Spaces", excerpt: "Learn how to make the most of your small living spaces with smart furniture and organization.", author: "admin", date: "Jumat, 14 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Small+Spaces" },
    { id: 4, title: "The Future of Smart Homes", excerpt: "Discover the latest innovations in smart home technology and how they can simplify your life.", author: "admin", date: "Sabtu, 15 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Smart+Homes" },
    { id: 5, title: "Bathroom Renovation Ideas", excerpt: "Upgrade your bathroom with these simple yet effective renovation ideas for a modern look.", author: "admin", date: "Minggu, 16 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Bathroom+Renovation" },
    // Add more dummy data here...
    { id: 1, title: "Choosing the Best Paint Colors", excerpt: "Improve your home with these top 5 tips. From DIY repairs to smart renovations, we have you covered.", author: "admin", date: "Rabu, 12 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Home+Improvement" },
    { id: 2, title: "Maximizing Small Spaces", excerpt: "Explore the latest trends in paint colors and find the perfect shade to transform your living space.", author: "admin", date: "Kamis, 13 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Paint+Colors" },
    { id: 3, title: "Mengetes Dono", excerpt: "Learn how to make the most of your small living spaces with smart furniture and organization.", author: "admin", date: "Jumat, 14 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Small+Spaces" },
    { id: 4, title: "The Future of Smart Homes", excerpt: "Discover the latest innovations in smart home technology and how they can simplify your life.", author: "admin", date: "Sabtu, 15 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Smart+Homes" },
    { id: 5, title: "Bathroom Renovation Ideas", excerpt: "Upgrade your bathroom with these simple yet effective renovation ideas for a modern look.", author: "admin", date: "Minggu, 16 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Bathroom+Renovation" },
    // Add more dummy data here...
  ];

  const postsPerPage = 5; // Change this if you want more/less posts per page
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog-kategori-section">
          {/* Category Title */}
      <div className="blog-kategori-header">
        <h2>Home Improvement</h2>
        <div className="blog-kategori-underline"></div>
      </div>
      <div className="blog-kategori-content-wrapper">
        {/* Left Side: Post Cards and Pagination */}
        <div className="blog-kategori-left">
          <div className="blog-kategori-post-cards">
            {currentPosts.map((post) => (
              <div className="blog-kategori-post-card" key={post.id}>
                <img src={post.image} alt={post.title} className="blog-kategori-post-image" />
                <div className="blog-kategori-post-details">
                  <h2>
                    <a href={`/posts/${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="author-date">
                    {post.author} | {post.date}
                  </p>
                  <p className="excerpt-post-category">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="blog-kategori-pagination">
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

        {/* Right Side: Trending Posts, Social Media, Banners */}
        <div className="blog-kategori-right">
          {/* Trending Posts */}
          <div className="trending-posts">
            <h3>Post Terpopuler</h3>
            {dummyPosts.slice(0, 3).map((post) => (
              <div className="trending-post" key={post.id}>
                <img src={post.image} alt={post.title} className="trending-post-image" />
                <div className="trending-post-details">
                  <h4>{post.title}</h4>
                  <p className="author-date">{post.author} | {post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="social-media-section">
            <h3>Follow Us</h3>
            <ul className="social-media-list">
              <li><FaFacebook /> <a href="https://facebook.com">Facebook</a></li>
              <li><FaTwitter /> <a href="https://twitter.com">Twitter</a></li>
              <li><FaInstagram /> <a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>

          {/* Banners */}
          <div className="banner-section">
            <div className="banner">
              <h4>Special Offers!</h4>
              <a href="/offers" className="banner-btn">Check Offers</a>
            </div>
            <div className="banner">
              <h4>Get a Free Quote!</h4>
              <a href="/quote" className="banner-btn">Request Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogKategori;
