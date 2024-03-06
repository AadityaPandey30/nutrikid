// Blog.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

const Blog = () => {
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('BACKEND_API_URL');
//         setBlogData(response.data);
//       } catch (error) {
//         console.error('Error fetching blog data:', error);
//       }
//     };

//     fetchData();
//   }, []); 

  return (
    <div className="px-[5%]">
      {/* {blogData.map((post) => (
        <div key={post._id}>
          <h2>{post.heading}</h2>
          <p>{post.content}</p>
        </div>
      ))} */}

      <h1>Blog Section</h1>
    </div>
  );
};

export default Blog;
