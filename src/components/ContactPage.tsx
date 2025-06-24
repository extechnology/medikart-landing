import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Section */}
<section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reach our <span className="text-teal-500">Help Desk</span> for support
            </h2>
            <p className="text-gray-600">
              Questions? Need assistance? Our dedicated support team is here to help you every step of the way:
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-full bg-teal-100 rounded-lg mb-6 flex items-center justify-center">
                <iframe className='w-full h-64' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.112664374855!2d75.86909707600451!3d11.175645323362536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6515373434a9b%3A0x4f0fc1e181669d09!2sMEDIKART!5e1!3m2!1sen!2sin!4v1750757093294!5m2!1sen!2sin"  loading="lazy" ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">📞</span>
                  <span className="text-gray-700">+91 984 742 0555</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✉️</span>
                  <span className="text-gray-700">medicart.raj@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-600">📍</span>
                  <span className="text-gray-700">
                    UNITED PLAZA, GROUND FLOOR, Flat No.: 18/140A1, A2:- <br />
                    RAMANATTUKARA, Kozhikode - Kerala <br />
                    PIN Code: 673032
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form className="space-y-6">
                <Input 
                  placeholder="Full Name" 
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                />
                <Input 
                  placeholder="Email" 
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                />
                <textarea 
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="w-full bg-white text-teal-500 hover:bg-gray-100">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
