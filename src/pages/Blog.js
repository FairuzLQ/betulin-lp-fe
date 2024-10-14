import React from 'react';
import DownloadSection from '../components/DownloadSection';
import RecentPostCarouselSection from '../components/RecentPostCarouselSection';

const Blog = () => {
    return (
        <div>
            <RecentPostCarouselSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Blog;