import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const BlogDetails = () => {
    const { id } = useParams();
    
    const [blog, setBlog] = useState(null);
    console.log("hello from the id",id);
    

    useEffect(() => {
        axios.get(`http://localhost:5000/blog/api/${id}`)
            .then(response => setBlog(response.data))
           
            
            .catch(error => console.error('Error fetching blog details:', error));
            
    }, [id]);

    if (!blog) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl font-semibold text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex font-quiksand justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{blog.description}</p>
                    <p className="text-sm text-gray-500 mb-2"><strong>Author:</strong> {blog.author}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
