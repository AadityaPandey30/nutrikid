import { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]); // State to store the fetched blog posts
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('jwt');
        const config = {
          headers: {
            Authorization: `Bearer${token}` // Include the token in the Authorization header
          }
        };
        
        // Pass config with headers to axios.get
        const response = await axios.get('http://localhost:8000/api/v1/blog/getallblog', config);
        setBlogPosts(response.data.data.blogPosts); // Update state with the received blog posts
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); // Fetch blog data when the component mounts
  }, []); // Empty dependency array ensures that useEffect runs only once after the component mounts

  return (
    <div className="px-[5%]">
      {loading ? (
        <p>Loading...</p>
      ) : blogPosts.length === 0 ? (
        <p>No content found</p>
      ) : (
        <>
          {blogPosts.map((post) => (
            <div key={post._id} className='bg-blue-500 my-5'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
