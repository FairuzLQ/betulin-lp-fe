import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import '../styles/RecentPostCarouselSection.css';
// Import images statically if they are stored in the local assets folder
import image1 from '../assets/images/layanan-img.png';
import image2 from '../assets/images/woi-test.jpg';
import image3 from '../assets/images/woi-test.jpg';
import image4 from '../assets/images/woi-test.jpg';

const RecentPostCarouselSection = () => {
  const posts = [
    {
      image: image1,
      title: 'Berita Terbaru Lorem Ipsum Dono Kasino Indro',
      author: 'John Doe',
      date: 'October 12, 2024',
      category: 'Technology',
      link: '/post-1',
      authorLink: '/author/john-doe',
      categoryLink: '/category/technology',
    },
    {
      image: image2,
      title: 'Post 2',
      author: 'Jane Smith',
      date: 'October 13, 2024',
      category: 'Business',
      link: '/post-2',
      authorLink: '/author/jane-smith',
      categoryLink: '/category/business',
    },
    {
      image: image3,
      title: 'Post 3',
      author: 'Alice Johnson',
      date: 'October 14, 2024',
      category: 'Health',
      link: '/post-3',
      authorLink: '/author/alice-johnson',
      categoryLink: '/category/health',
    },
    {
      image: image4,
      title: 'Post 4',
      author: 'Bob Brown',
      date: 'October 15, 2024',
      category: 'Lifestyle',
      link: '/post-4',
      authorLink: '/author/bob-brown',
      categoryLink: '/category/lifestyle',
    },
  ];

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
              <img src={post.image} alt={post.title} />
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
