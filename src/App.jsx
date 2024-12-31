import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#040C18] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-10 ">
        <div className="text-xl font-semibold">GPT-3</div>
        <div className="hidden md:flex space-x-20">
          <a href="#" className="text-sm hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            What is GPT?
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Open AI
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Case Studies
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Library
          </a>
        </div>
        <div className="space-x-4">
          <button className="text-sm px-4 py-2 hover:text-gray-300">
            Sign in
          </button>
          <button className="text-sm bg-[#FF4820] px-6 py-2 rounded-md hover:bg-opacity-90">
            Sign up
          </button>
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
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
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
            <span className="text-sm text-white">
              1,600+ people requested access in last 24 hours
            </span>
          </div>
        </div>

        {/* Right Content - AI Face */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-[500px]">
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
      <div className="container flex flex-col mx-auto md:py-24  md:flex-row items-center justify-between">
        <div className="max-w-8xl mx-auto bg-sky-950 p-20 shadow-xl">
          {/*  Section  II*/}
          <div className="flex flex-row justify-evenly gap-x-16 col-start-2 col-span-4items-center mb-16">
            <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-orange-400 ">
              <h2 className=" font-bold">What is GPT-3</h2>
            </div>
            <p className="text-gray-300 mb-8">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>

          {/* Main Heading */}
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 max-w-xl">
              The possibilities are beyond your imagination
            </h1>
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Explore The Library
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Chatbots Section */}
            <div className="flex-1">
              <div className="h-1 w-8 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Chatbots</h3>
              <p className="text-gray-300">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>

            {/* Knowledgebase Section */}
            <div className="flex-1">
              <div className="h-1 w-8 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Knowledgebase</h3>
              <p className="text-gray-300">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments.
              </p>
            </div>

            {/* Education Section */}
            <div className="flex-1">
              <div className="h-1 w-8 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-300">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#040C18] min-h-screen text-white">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto p-16">
          <div className="grid grid-cols-2 gap-16 mb-24">
            
            <div>
              <h1 className="text-5xl font-bold mb-8 ">
                <span className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text">
                  The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </span>
              </h1>

              <button className="text-[#FF8A71] hover:text-[#FF8A71]/90 text-sm">
                Request Early Access to Get Started
              </button>
            </div>
            
            <div className="space-y-12">
              {/* Feature Items */}
              <div className="flex items-start gap-4">
              <div className="h-1 w-10 bg-gradient-to-r from-pink-500 to-orange-400 mb-4"></div>
                <div>
                  <br />
                  <h3 className="text-white text-lg font-semibold">
                    Improving end distrusts instantly
                  </h3>
                </div>
                <div>
                  <p className="text-[#81AFDD] mt-2">
                    From they fine john he give of rich he. They age and draw
                    mrs like. Improving end distrusts may instantly was
                    household applauded.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#AE67FA] to-[#F49867] mt-4"></div>
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Message or am nothing
                  </h3>
                  <p className="text-[#81AFDD] mt-2">
                    Led ask possible mistress relation elegance eat likewise
                    debating. By message or am nothing amongst chiefly address.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 ">
      <div className="mx-auto bg-gradient-to-r from-purple-400 to-orange-300  md:py-8 rounded-2xl p-28 flex items-center">
        <div className="space-y-2">
          <p className="text-gray-900 text-sm">
            Request Early Access to Get Started
          </p>
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold">
            Register today & start exploring the endless possibilities.
          </h2>
        </div>
        <button className="bg-black text-white px-12 py-6 rounded-full hover:bg-gray-800 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
    <div className=" flex  items-center justify-center  p-4">
      <div className="mx-auto flex flex-col  md:py-8 md:flex-row justify-between">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
            A lot is happening,<br/>
            We are blogging about it.
          </span>
        </h1>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-28 text-white">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md md:row-span-2">
        <img
          src="/images/Rectangle 22.png" 
          alt="Article 1"
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Sep 26, 2021</p>
          <h2 className="text-lg font-semibold mt-2">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/blog02.png" 
          alt="Article 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Sep 26, 2021</p>
          <h2 className="text-lg font-semibold mt-2">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/blog03.png"
          alt="Article 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Sep 26, 2021</p>
          <h2 className="text-lg font-semibold mt-2">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>

    
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/blog04.png" 
          alt="Article 4"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Sep 26, 2021</p>
          <h2 className="text-lg font-semibold mt-2">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>


      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/blog05.png" 
          alt="Article 5"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-400">Sep 26, 2021</p>
          <h2 className="text-lg font-semibold mt-2">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>

  {/*FOOTER SECTION*/}
    <div className="min-h-screen bg-[#021b34] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text">
              Do you want to step in to the
              <br />
              future before others
            </span>
          </h2>
          <button className="border border-white text-white px-8 py-4 hover:bg-white/10 transition-colors">
            Request Early Access
          </button>
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-wrap justify-between items-start gap-12 mb-8">
          {/* GPT-3 Branding Section */}
          <div className="flex-1 max-w-xs">
            <h3 className="text-white text-4xl font-bold mb-6">GPT-3</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crechterwoord K12 182 DK
              <br />
              Alknjkcb, All Rights Reserved
            </p>
          </div>

          {/* Links */}
          <div className="flex-1">
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Overons</a></li>
              <li><a href="#" className="hover:text-white">Social Media</a></li>
              <li><a href="#" className="hover:text-white">Counters</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="flex-1">
            <h4 className="text-white font-bold mb-4">Get in touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Crechterwoord K12</li>
              <li>182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
          © 2021 GPT-3. All rights reserved.
        </div>
      </div>
    </div>
    
    


    </div>
  );
};

export default LandingPage;
