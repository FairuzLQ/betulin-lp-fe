import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../components/PostSection';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';

const BlogPost = () => {
  const { documentId } = useParams(); // Use documentId from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Use documentId to fetch the post by documentId
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels?filters[documentId][$eq]=${documentId}&populate=*`);
        const data = await response.json();
        setPost(data.data[0]); // Set the first post in the array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [documentId]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <PostSection post={post} /> {/* Pass the post data to PostSection */}
      {/* Assuming CategoryRecentPostSection uses the same posts structure */}
    </div>
  );
};

export default BlogPost;
