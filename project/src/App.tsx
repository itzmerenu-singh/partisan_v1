import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Globe, Building2, Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: 'Capital Advisor',
      description: 'Financial services focused on meeting the diverse needs of micro, small and medium enterprises (MSME) across India.',
      link: '#capital-advisor'
    },
    {
      icon: Globe,
      title: 'Exports / Imports',
      description: 'Expert export and import services based in Mumbai, connecting Indian businesses with global markets.',
      link: '#export-import'
    },
    {
      icon: Building2,
      title: 'Development & Construction',
      description: 'Premium construction and development services delivered with professional expertise and proven effectiveness.',
      link: '#construction'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PI</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Partisan International
                </h1>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-blue-100'
                }`}>
                  Group of Companies
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>Home</a>
              <a href="#services" className={`transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>Services</a>
              <a href="#about" className={`transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>About</a>
              <a href="#contact" className={`transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <button
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to Partisan International
              <span className="block text-cyan-300">Group of Companies</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Founded in 2011 by Mr. Ravi Mali, we're focused on meeting the financial needs of
              micro, small and medium enterprises (MSME) in India. Based in Mumbai and Dehradun,
              we deliver excellence across financial services, export services, and construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors group">
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="text-white opacity-50" size={32} />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Divisions</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Three Core Business Divisions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With more than a decade of expertise and effectiveness in the relevant sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
                >
                  View Details
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence Since 2011
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In 2011, Mr. Ravi Mali founded Partisan International, a group of companies focused on meeting the financial needs of micro, small and medium enterprises (MSME) in India. With bases in Mumbai and Dehradun, we deliver professional services across financial advisory, export-import, and construction.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We have been able to establish and keep positive client relationships by assembling the best project teams for our clients. The professionals on our team have demonstrated a history of more than a decade of expertise and effectiveness in the relevant sectors.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
                  <div className="text-sm text-gray-600">Years Active</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-sm text-gray-600">Strategic Locations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Core Divisions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="text-blue-600 opacity-20" size={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect with Us</h2>
          <p className="text-xl text-gray-300 mb-12">
            Discover how Partisan International can help your business thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@partisaninternational.com" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="tel:+911234567890" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PI</span>
                </div>
                <span className="text-white font-bold">Partisan International</span>
              </div>
              <p className="text-sm">Building success through excellence since 2011</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#capital-advisory" className="hover:text-white transition-colors">Capital Advisory</a></li>
                <li><a href="#export-import" className="hover:text-white transition-colors">Export & Import</a></li>
                <li><a href="#construction" className="hover:text-white transition-colors">Construction</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-sm">
                <li>Mumbai, Maharashtra</li>
                <li>Dehradun, Uttarakhand</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Partisan International. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
