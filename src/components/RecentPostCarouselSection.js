import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import '../styles/RecentPostCarouselSection.css'; // Custom styles

const RecentPostCarouselSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recent posts from the API
  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/artikels?populate=*&sort=TglArtikel:desc&pagination[limit]=3`
        );
        const data = await response.json();

        console.log('API Response:', data); // Debugging the response structure

        const baseUrl = process.env.REACT_APP_API_URL; // Base URL for images

        const formattedPosts = data.data.map((article) => {
          const imageFormats = article.FeaturedImage?.formats || {};
          const imageUrl =
            imageFormats.large?.url ||
            imageFormats.medium?.url ||
            imageFormats.small?.url ||
            article.FeaturedImage?.url;

          return {
            image: imageUrl ? `${baseUrl}${imageUrl}` : null,
            title: article.TitleArtikel || 'Untitled',
            author: article.penulis_artikel?.NamaPenulis || 'Unknown Author',
            date: article.TglArtikel
              ? new Date(article.TglArtikel).toLocaleDateString()
              : 'Unknown Date',
            category: article.kategori_artikel?.NamaKategori || 'Uncategorized',
            link: `/post/${article.id}`, // Dynamic article link
            authorLink: `/author/${article.penulis_artikel?.id}`, // Dynamic author link
            categoryLink: `/blog-kategori/${article.kategori_artikel?.SlugKategori}`, // Dynamic category link
          };
        });

        setPosts(formattedPosts);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recent-post-carousel">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <div className="post-image">
              <a href={post.categoryLink} className="post-category">
                {post.category}
              </a>
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <div className="no-image-placeholder">No Image Available</div>
              )}
              <div className="post-details">
                <a href={post.link} className="post-title">
                  <h3>{post.title}</h3>
                </a>
                <p>
                  <a href={post.authorLink} className="post-author">
                    {post.author}
                  </a>{' '}
                  • {post.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentPostCarouselSection;
