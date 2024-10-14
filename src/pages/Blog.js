import React from 'react';
import DownloadSection from '../components/DownloadSection';
import RecentPostCarouselSection from '../components/RecentPostCarouselSection';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';


const Blog = () => {
    return (
        <div>
            <RecentPostCarouselSection />
            <CategoryRecentPostSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Blog;