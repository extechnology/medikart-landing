
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              <img src="./logo2.png" alt="Logo" className='w-12 h-12 sm:w-16 sm:h-16 object-contain' />
            </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Experience personalized medical care from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <i onClick={() => window.open("https://www.facebook.com/medikart.store/", "_blank")} className='fa-brands fa-facebook text-gray-400 hover:text-teal-600 cursor-pointer' ></i>
              <i onClick={() => window.open("https://x.com/medikart555", "_blank")} className='fa-brands fa-x-twitter text-gray-400 hover:text-teal-600 cursor-pointer'></i>
              <i onClick={() => window.open("https://www.instagram.com/medikart.store", "_blank")} className='fa-brands fa-instagram text-gray-400 hover:text-teal-600 cursor-pointer'></i>
              <i onClick={() => window.open("https://www.linkedin.com/company/107525886/admin/dashboard/", "_blank")} className='fa-brands fa-linkedin text-gray-400 hover:text-teal-600 cursor-pointer'></i>
              
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-teal-600">Home</a></li>
              <li><a href="/shop" className="hover:text-teal-600">Shop</a></li>
              <li><a href="/about" className="hover:text-teal-600">About us</a></li>
              <li><a href="/contact" className="hover:text-teal-600">Contact Help Desk</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>UNITED PLAZA, GROUND FLOOR,</p>
              <p> Flat No.: 18/140A1, A2, Ranganathapura,</p>
              <p>Kozhikode - Kerala PIN Code: 673032</p>
              <p>email : medikart.rk@Gmail.com </p>
              <p>Contact Now! +91 984 742 0555</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/privacy-policy" className="hover:text-teal-600">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-teal-600">Terms & Conditions</a></li>
              <li><a href="/refund-policy" className="hover:text-teal-600">Return & Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Medicart 2024 © All Rights Reserved
          </p>
          <p className="text-sm text-gray-500">
            powered by <a href="https://extechnology.in" className='hover:text-teal-600 underline' target='_blank'>extechnology.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;