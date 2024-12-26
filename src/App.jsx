import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#040C18] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-10 ">
        <div className="text-xl font-semibold">GPT-3</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sm hover:text-gray-300">Home</a>
          <a href="#" className="text-sm hover:text-gray-300">What is GPT?</a>
          <a href="#" className="text-sm hover:text-gray-300">Open AI</a>
          <a href="#" className="text-sm hover:text-gray-300">Case Studies</a>
          <a href="#" className="text-sm hover:text-gray-300">Library</a>
        </div>
        <div className="space-x-4">
          <button className="text-sm px-4 py-2 hover:text-gray-300">Sign in</button>
          <button className="text-sm bg-[#FF4820] px-6 py-2 rounded-md hover:bg-opacity-90">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
              Let's Build Something amazing with GPT-3 OpenAI
            </span>
          </h1>
          <p className="text-[#81AFDD] max-w-lg text-lg">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-[#052D56] p-4 rounded-md flex-grow text-[#3D6184] placeholder-[#3D6184]"
            />
            <button className="bg-[#FF4820] px-8 py-4 rounded-md hover:bg-opacity-90 whitespace-nowrap">
              Get Started
            </button>
          </div>
          
          {/* User Avatars */}
          <div className="flex items-center space-x-2 mt-8">
            <div className="flex -space-x-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#040C18]"
                />
              ))}
            </div>
            <span className="text-sm text-white">1,600+ people requested access in last 24 hours</span>
          </div>
        </div>

        {/* Right Content - AI Face */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-[500px]">
            {/* Geometric AI Face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/ai.png" alt="AI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          <img src="/images/google.png" alt="Google" className="h-6" />
          <img src="/images/slack.png" alt="Slack" className="h-6" />
          <img src="/images/atlassian.png" alt="Atlassian" className="h-6" />
          <img src="/images/dropbox.png" alt="Dropbox" className="h-6" />
          <img src="/images/shopify.png" alt="Shopify" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;