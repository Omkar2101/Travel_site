import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blog/api');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError('Error fetching blogs. Please try again later.');
            }
        };

        fetchBlogs();
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create-blog');
    };

    return (
        <div className="min-h-screen font-quiksand bg-gray-100 py-8 px-4 flex flex-col items-center relative">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
                {blogs.map((blog) => (
                    <div
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        key={blog._id}
                    >
                        <Link to={`/blog/${blog._id}`}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {blog.title}
                                </h2>
                                <h2 className="text-md font-medium text-gray-600">
                                    {blog.author}
                                </h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* Fixed button positioned at the bottom-right corner */}
            <button
                onClick={handleClick}
                className="fixed bottom-5 right-5 bg-black p-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
                Create New Blog
            </button>
        </div>
    );
};

export default Blog;
