import React from 'react';
import { 
  Package, 
  Leaf, 
  Heart, 
  ArrowRight, 
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">EcoBoxDelight</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-600">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Eco-Friendly Products Delivered Monthly
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Discover curated sustainable products that make a difference. 
                Join our community of eco-conscious consumers.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly products" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Why Choose EcoBoxDelight?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Sustainable Products</h3>
              <p className="mt-2 text-gray-600">
                Carefully selected eco-friendly items that help reduce environmental impact
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Monthly Surprises</h3>
              <p className="mt-2 text-gray-600">
                New curated products delivered to your doorstep every month
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Community Impact</h3>
              <p className="mt-2 text-gray-600">
                Join a community of eco-conscious individuals making a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '29',
                features: ['3-4 eco products monthly', 'Digital newsletter', 'Community access']
              },
              {
                name: 'Popular',
                price: '49',
                features: ['5-6 eco products monthly', 'Premium newsletter', 'Exclusive workshops', 'Early access']
              },
              {
                name: 'Premium',
                price: '79',
                features: ['7-8 luxury eco products', 'Personal curation', 'Priority shipping', 'VIP events']
              }
            ].map((plan, index) => (
              <div key={plan.name} className={`
                bg-white rounded-lg shadow-lg p-8
                ${index === 1 ? 'border-2 border-green-600 transform scale-105' : ''}
              `}>
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`
                  w-full mt-8 px-6 py-3 rounded-full transition
                  ${index === 1 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'border-2 border-green-600 text-green-600 hover:bg-green-50'}
                `}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Package className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">EcoBoxDelight</span>
              </div>
              <p className="mt-4 text-gray-400">
                Making sustainable living accessible through curated eco-friendly products.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@ecoboxdelight.com</li>
                <li className="text-gray-400">1-800-ECO-BOX</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoBoxDelight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;