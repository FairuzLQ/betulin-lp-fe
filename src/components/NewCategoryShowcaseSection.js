import React from 'react';
import '../styles/NewCategoryShowcaseSection.css'; // Custom CSS for this component

const NewCategoryShowcase = () => {
  const posts = [
    {
      image: require('../assets/images/layanan-img.png'),
      title: 'Breaking the Barriers of Innovation',
      category: 'Technology',
      author: 'John Doe',
      date: 'October 12, 2024',
      link: '/post-1',
    },
    {
      image: require('../assets/images/layanan-img.png'),
      title: 'Exploring New Horizons in Design',
      category: 'Design',
      author: 'Jane Smith',
      date: 'October 13, 2024',
      link: '/post-2',
    },
    {
      image: require('../assets/images/layanan-img.png'),
      title: 'Health & Wellness Trends for 2024',
      category: 'Health',
      author: 'Alice Johnson',
      date: 'October 14, 2024',
      link: '/post-3',
    },
  ];

  return (
    <section className="new-category-showcase">
      <div className="main-post">
        <img src={posts[0].image} alt={posts[0].title} className="main-post-image" />
        <div className="main-post-info">
          <div className="category-tag">{posts[0].category}</div>
          <h2>{posts[0].title}</h2>
          <p>
            By {posts[0].author} • {posts[0].date}
          </p>
          <a href={posts[0].link} className="read-more-link">Read More</a>
        </div>
      </div>
      <div className="side-posts">
        {posts.slice(1).map((post, index) => (
          <div key={index} className="side-post">
            <img src={post.image} alt={post.title} className="side-post-image" />
            <div className="side-post-info">
              <h3>{post.title}</h3>
              <small>
                By {post.author} • {post.date}
              </small>
              <a href={post.link} className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCategoryShowcase;
