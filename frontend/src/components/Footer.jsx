
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        {/* About Us Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="mb-4">Discover the world of flavors with our diverse collection of recipes and culinary insights. Join us on a journey to explore the art of cooking.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">Recipes</a></li>
            <li className="mb-2"><a href="#">Blog</a></li>
            <li className="mb-2"><a href="#">About Us</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">Have questions or suggestions? Reach out to us!</p>
          {/* Add your contact information here */}
          <p>Email: info@yourwebsite.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Foodie Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
