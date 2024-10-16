import React from 'react';
import DownloadSection from '../components/DownloadSection';
import RecentPostCarouselSection from '../components/RecentPostCarouselSection';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';
import NewCategoryShowcaseSection from '../components/NewCategoryShowcaseSection';


const Blog = () => {
    return (
        <div>
            <RecentPostCarouselSection />
            <CategoryRecentPostSection />
            <NewCategoryShowcaseSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Blog;