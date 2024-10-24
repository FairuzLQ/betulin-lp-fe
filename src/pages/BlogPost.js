import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../components/PostSection';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';

const BlogPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels/${id}?populate=*`);
        const data = await response.json();
        setPost(data.data); // Update the post state with the fetched data
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <PostSection post={post} /> {/* Pass the post data to PostSection */}
      <CategoryRecentPostSection />
    </div>
  );
};

export default BlogPost;
