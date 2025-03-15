import React, { useState, useEffect } from 'react';
import { Clock, ShoppingBag, Award, Truck } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold text-amber-900">Golden</h1>
          <div className="flex gap-6">
            <a href="#features" className="text-amber-900 hover:text-amber-700">Features</a>
            <a href="#collection" className="text-amber-900 hover:text-amber-700">Collection</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700">Contact</a>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">Timeless Elegance for Your Space</h2>
            <p className="text-lg text-amber-800 mb-8">Discover our collection of handcrafted wall clocks that combine modern design with classic sophistication.</p>
            <button className="bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Interactive Clock Display */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-8 border-amber-900">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-6 bg-amber-900"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(8px)`,
                    transformOrigin: '50% 192px',
                  }}
                />
              ))}
              
              {/* Clock Hands */}
              <div
                className="absolute w-1 h-32 bg-amber-900 rounded-full origin-bottom"
                style={{
                  left: '50%',
                  bottom: '50%',
                  transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
                }}
              />
              <div
                className="absolute w-1 h-40 bg-amber-800 rounded-full origin-bottom"
                style={{
                  left: '50%',
                  bottom: '50%',
                  transform: `rotate(${minutes * 6}deg)`,
                }}
              />
              <div
                className="absolute w-0.5 h-44 bg-amber-600 rounded-full origin-bottom"
                style={{
                  left: '50%',
                  bottom: '50%',
                  transform: `rotate(${seconds * 6}deg)`,
                }}
              />
              <div className="absolute w-4 h-4 bg-amber-900 rounded-full" style={{ left: 'calc(50% - 8px)', top: 'calc(50% - 8px)' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">Why Choose Golden</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-amber-900 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Precision Crafted</h4>
              <p className="text-amber-800">Each clock is meticulously crafted to ensure accurate timekeeping.</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-amber-900 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
              <p className="text-amber-800">Made from the finest materials for lasting beauty and durability.</p>
            </div>
            <div className="text-center p-6">
              <Truck className="w-12 h-12 text-amber-900 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Free Shipping</h4>
              <p className="text-amber-800">Enjoy free worldwide shipping on all our products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">Featured Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Gold",
                price: "$299",
                image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800"
              },
              {
                name: "Modern Minimal",
                price: "$249",
                image: "https://images.unsplash.com/photo-1516139008210-96e45dccd83b?auto=format&fit=crop&w=800"
              },
              {
                name: "Vintage Bronze",
                price: "$329",
                image: "https://images.unsplash.com/photo-1574605433669-987b2789e191?auto=format&fit=crop&w=800"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-amber-900 font-bold">{product.price}</p>
                  <button className="mt-4 w-full bg-amber-900 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Golden</h4>
              <p className="text-amber-200">Crafting timeless pieces for your home since 1990.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-amber-200">
                <li>123 Clock Street</li>
                <li>New York, NY 10001</li>
                <li>contact@golden.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-full text-amber-900 flex-1"
                />
                <button className="bg-amber-700 px-4 py-2 rounded-r-full hover:bg-amber-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-200">
            <p>&copy; 2024 Golden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;