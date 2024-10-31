import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../components/PostSection';

const BlogPost = () => {
  const { slug } = useParams(); // Use slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Use slug to fetch the post by slug
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/artikels?filters[ArtikelSlug][$eq]=${slug}&populate=*`);
        const data = await response.json();
        setPost(data.data[0]); // Set the first post in the array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <PostSection post={post} /> {/* Pass the post data to PostSection */}
    </div>
  );
};

export default BlogPost;
