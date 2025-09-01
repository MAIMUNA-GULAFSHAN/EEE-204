import React from 'react'
import person1 from '../assets/subperson1.webp'
import person2 from '../assets/subperson2.webp'
import person3 from '../assets/subperson3.webp'
const MainPage = () => {
    return (
        <div className='bg-red-200'>
        <section className="relative bg-gray-50 min-h-screen overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-100"></div>
          
          {/* Navigation */}
          <nav className="relative z-10 flex items-center justify-between px-6 lg:px-8 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">SAOR</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
                  Home
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
                  Portfolio
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
                  Blog
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
                Get A Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </nav>
          
          {/* Main Content */}
          <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-block">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold">
                      SEO & Marketing Agency
                    </span>
                  </div>
                  
                  {/* Main Heading */}
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Empowering Growth Unlock SEO Solutions
                  </h1>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    At Saor, we are dedicated to helping businesses navigate the complex digital landscape with ease. We specialize in providing a full spectrum of SEO
                  </p>
                  
                  {/* CTA Button */}
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center">
                    Get Started Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Right Content - Image Area */}
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative z-10">
                    <img src="your-background-image.jpg" alt="SEO Professional" className="w-full h-auto rounded-2xl object-cover" />
                  </div>
                  
                  {/* Floating Elements */}
                  {/* Star Icon */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  
                  {/* Get Started Now Bubble */}
                  <div className="absolute bottom-16 left-8 bg-white rounded-2xl px-6 py-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-900 font-medium">Get Started Now</span>
                    </div>
                  </div>
                  
                  {/* Team Avatars */}
                  <div className="absolute bottom-8 right-8 flex items-center">
                    <div className="flex -space-x-2">
                      <img src={person1} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src={person2} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src={person3} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
                      <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-black text-lg font-bold">+</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 right-1/3 w-6 h-6 bg-yellow-200 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        </div>
    )
}

export default MainPage