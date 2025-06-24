

import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Truck, Heart, User, MessageSquare } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted Solutions for a <br />
                Healthier Tomorrow.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Quality is at the heart of everything we do. From personalized care to cutting-edge medical solutions, we are committed to delivering excellence that enhances lives and builds trust.
              </p>
              <Button className="b rounded-[12px] bg-gradient-to-r from-[#22A295] to-[#6AD8CD] hover:bg-teal-600  transition-colors duration-200 text-white px-8 py-3 text-lg">
                Order Now →
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="./home-img-1.png" 
                alt="Family health" 
                className="rounded-lg shadow-sm w-[80%] "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services <span className="text-teal-500">We Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Medicart, we offer tailored medical services designed to meet all your healthcare needs efficiently. 
              Explore our diverse range of offerings and find the right fit for you and your family's specific 
              healthcare needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Home Delivery of Medical Products
                    </h3>
                    <p className="text-gray-600">
                      Fast and reliable delivery of medicines, supplements, and wellness items to your door-step.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Health & Wellness Supply
                    </h3>
                    <p className="text-gray-600">
                      Distribution of health & wellness products, Nutritional supplements & Medical equipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <User className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Personal Care & Hygiene Essentials
                    </h3>
                    <p className="text-gray-600">
                      Delivery of Daily wellness products such as toothbrushes, sanitizers, and hygiene items, Subscription & refill services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Subscription & Refill Service
                    </h3>
                    <p className="text-gray-600">
                      Scheduled deliveries for regular medications and health products with automated reminders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reach our <span className="text-teal-500">Help Desk</span> for support
            </h2>
            <p className="text-gray-600">
              Get expert assistance and personalized care solutions for your health and wellness needs.
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
                    NO-187,1ST FLOOR, GROUND FLOOR, Flat No:- 
                    A4,G4, A2,RANGANATHAPURA, Ramnagar - 
                    Kerala PIN Code: 673302
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

export default HomePage;
