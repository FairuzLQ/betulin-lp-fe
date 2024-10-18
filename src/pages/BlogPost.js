import React from 'react';
import CategoryRecentPostSection from '../components/CategoryRecentPostSection';
import PostSection from '../components/PostSection';

const BlogPost = () => {
    return (
        <div>
            <PostSection />
            <CategoryRecentPostSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default BlogPost;