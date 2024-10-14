import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import '../styles/RecentPostCarouselSection.css';
// Import images statically if they are stored in the local assets folder
import image1 from '../assets/images/layanan-img.png';
import image2 from '../assets/images/layanan-img.png';
import image3 from '../assets/images/layanan-img.png';
import image4 from '../assets/images/layanan-img.png';

const RecentPostCarouselSection = () => {
  const posts = [
    {
      image: image1,
      title: 'Post 1',
      author: 'John Doe',
      date: 'October 12, 2024',
      link: '/post-1',
    },
    {
      image: image2,
      title: 'Post 2',
      author: 'Jane Smith',
      date: 'October 13, 2024',
      link: '/post-2',
    },
    {
      image: image3,
      title: 'Post 3',
      author: 'Alice Johnson',
      date: 'October 14, 2024',
      link: '/post-3',
    },
    {
      image: image4,
      title: 'Post 4',
      author: 'Bob Brown',
      date: 'October 15, 2024',
      link: '/post-4',
    },
  ];

  return (
    <div className="recent-post-carousel">
      <h2>Recent Posts</h2>
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
              <img src={post.image} alt={post.title} />
              <div className="post-details">
                <h3>{post.title}</h3>
                <p>{post.author} • {post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentPostCarouselSection;
