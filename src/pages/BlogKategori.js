import React, { useState } from 'react';
import '../styles/BlogKategori.css'; // Custom CSS

const BlogKategori = () => {
  // Dummy Data for blog posts
  const dummyPosts = [
    { id: 1, title: "5 Tips for Home Improvement", excerpt: "Improve your home with these top 5 tips. From DIY repairs to smart renovations, we have you covered.", author: "admin", date: "Rabu, 12 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Home+Improvement" },
    { id: 2, title: "Choosing the Best Paint Colors", excerpt: "Explore the latest trends in paint colors and find the perfect shade to transform your living space.", author: "admin", date: "Kamis, 13 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Paint+Colors" },
    { id: 3, title: "Maximizing Small Spaces", excerpt: "Learn how to make the most of your small living spaces with smart furniture and organization.", author: "admin", date: "Jumat, 14 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Small+Spaces" },
    { id: 4, title: "The Future of Smart Homes", excerpt: "Discover the latest innovations in smart home technology and how they can simplify your life.", author: "admin", date: "Sabtu, 15 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Smart+Homes" },
    { id: 5, title: "Bathroom Renovation Ideas", excerpt: "Upgrade your bathroom with these simple yet effective renovation ideas for a modern look.", author: "admin", date: "Minggu, 16 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Bathroom+Renovation" },
    { id: 6, title: "Kitchen Makeover Tips", excerpt: "Transform your kitchen into a stylish and functional space with these expert tips.", author: "admin", date: "Senin, 17 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Kitchen+Makeover" },
    { id: 7, title: "Landscaping Your Garden", excerpt: "Find out how to create the perfect landscape for your garden.", author: "admin", date: "Selasa, 18 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Landscaping" },
    { id: 8, title: "Home Security Systems", excerpt: "Learn about the best home security systems to keep your family safe.", author: "admin", date: "Rabu, 19 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Security+Systems" },
    { id: 9, title: "Solar Panel Installation", excerpt: "Everything you need to know about installing solar panels for your home.", author: "admin", date: "Kamis, 20 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Solar+Panels" },
    { id: 10, title: "Interior Design Trends", excerpt: "Discover the latest interior design trends for 2024.", author: "admin", date: "Jumat, 21 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Interior+Design" },
    { id: 11, title: "Outdoor Living Spaces", excerpt: "Transform your outdoor space into a cozy and inviting area.", author: "admin", date: "Sabtu, 22 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Outdoor+Spaces" },
    { id: 12, title: "Energy-Efficient Windows", excerpt: "Learn how to choose energy-efficient windows for your home.", author: "admin", date: "Minggu, 23 Oktober 2024", image: "https://via.placeholder.com/300x200?text=Windows" },
  ];

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices for the posts to show on the current page
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

      <div className="blog-kategori-content">
        {/* Posts */}
        <div className="blog-kategori-post-cards">
          {currentPosts.map((post) => (
            <div className="blog-kategori-post-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-kategori-post-image" />
              <div className="blog-kategori-post-details">
                <h3>
                  <a href={`/posts/${post.id}`}>{post.title}</a>
                </h3>
                <p className="author-date">
                  {post.author} | {post.date}
                </p>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured or Trending Section */}
        <div className="blog-kategori-extra-section">
          <h3>Featured Posts</h3>
          <div className="blog-kategori-featured-post">
            {dummyPosts.slice(0, 4).map((post) => (
              <div key={post.id} className="post">
                <img src={post.image} alt={post.title} />
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
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
    </section>
  );
};

export default BlogKategori;
