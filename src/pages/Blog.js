import React, { useEffect, useState } from 'react';
import DownloadSection from '../components/DownloadSection';
import RecentPostCarouselSection from '../components/RecentPostCarouselSection';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';
import NewCategoryShowcaseSection from '../components/NewCategoryShowcaseSection';

const Blog = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/kategori-artikels?populate=*`);
        const data = await response.json();
        setCategories(data.data); // Assuming data structure is `data.data`
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <RecentPostCarouselSection />
      
      {/* Dynamically render a CategoryRecentPostSection for each category */}
      {categories.map((category) => (
        <CategoryRecentPostSection key={category.id} category={category} />
      ))}

      <NewCategoryShowcaseSection />
      <DownloadSection />
    </div>
  );
};

export default Blog;
