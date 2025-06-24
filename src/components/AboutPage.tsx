import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-teal-600 mb-6">
                Medicart's Story: <span className='text-[#3D3D3D]'> Get to know us</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="./about.png" 
                    alt="Medical professional" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[#333333] mb-4 text-justify">
                    Medikart is a trusted health and wellness product delivery company dedicated to making essential medical and personal care products easily accessible to customers. Operating through its online platform, medikar.store, Medikart offers a wide range of products including prescription medicines, health supplements, medical equipment, and hygiene essentials—all delivered swiftly to your doorstep. Based at UNITED PLAZA, GROUND FLOOR, Flat No.: 18/140A1, A2, RAMANATTUKARA, Kozhikode, Kerala, Medikart combines professionalism with care, ensuring that every order is handled with accuracy and safety. With a strong focus on customer satisfaction, quality assurance, and reliable logistics, Medikart stands out as a dependable partner in health. Whether it’s routine medications or emergency supplies, Medikart is committed to being there when you need it most. Their goal is simple: to promote better health and wellness for every household through efficient, friendly, and trustworthy delivery services across Kozhikode and surrounding regions.
                  </p>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
