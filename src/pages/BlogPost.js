import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../components/PostSection';

const BlogPost = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels?filters[ArtikelSlug][$eq]=${slug}&populate=*`);
        const data = await response.json();
        setPost(data.data[0]); // Set the first post in the array
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchPost();
  }, [slug]); // Re-fetch when slug changes

  if (loading) {
    return <p>Loading post...</p>; // Display loading message
  }

  if (!post) {
    return <p>Post not found</p>; // Display if post is not found
  }

  return (
    <div>
      <PostSection post={post} /> {/* Pass the post data to PostSection */}
    </div>
  );
};

export default BlogPost;
