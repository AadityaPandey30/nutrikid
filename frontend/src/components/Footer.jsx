
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-[5%] mt-20">
      <div className=" mx-auto flex flex-wrap justify-around">
        {/* About Us Section */}
        <div className="basis-1/2 md:basis-1/3">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="mb-4 pr-4">Discover the world of flavors with our diverse collection of recipes and culinary insights. Join us on a journey to explore the art of cooking.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 basis-1/4">
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
        <div className="w-full md:w-1/3 md:py-0 py-8  md:px-0 px-[5%] ">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">Have questions or suggestions? Reach out to us!</p>
          <p>Email: <a href="mailto:aprock3004@gmail.com">aprock3004@gmail.com</a></p>
          <p>Phone: <a href="tel:123-456-7890">+91 9532977264</a></p>
        </div>
      </div>

      <div className="px-[8%] py-8 text-right">
      <h1 className="font-semibold">Contributors:</h1>
      <p>Aaditya Pandey</p>
      <p>Vivek Pal</p>
      <p>Priyanshu Bisht</p>
      <p>Vinayak Shishodia</p>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Foodie Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
