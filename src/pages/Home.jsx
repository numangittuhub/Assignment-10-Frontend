import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  return (
  <>
  <Slider
  dots={true}
  infinite={true}
  speed={1000}         // slide transition speed in ms
  slidesToShow={1}
  slidesToScroll={1}
  autoplay={true}      // auto slide
  autoplaySpeed={2000} // slide duration in ms
  pauseOnHover={true}  // hover করলে pause হবে
  cssEase="ease-in-out" // smooth transition
>
  {/* Slide 1 */}
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1601758123927-7e3c4239e0a2?auto=format&fit=crop&w=1350&q=80"
      alt="Garbage issue"
      className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Keep Your Community Clean
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Report garbage, waterlogging, and broken public property easily.
      </p>
    </div>
  </div>

  {/* Slide 2 */}
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1596079897857-c5f3b9927bb7?auto=format&fit=crop&w=1350&q=80"
      alt="Community cleaning"
      className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Join Cleanup Drives
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Contribute to make your area cleaner and safer.
      </p>
    </div>
  </div>

  {/* Slide 3 */}
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1596496055361-37f91c113de3?auto=format&fit=crop&w=1350&q=80"
      alt="Sustainability action"
      className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Act for Sustainability
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Report issues & contribute to create a greener future.
      </p>
    </div>
  </div>
</Slider>

    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
      
      {/* Left Text Content */}
      <div className="space-y-6 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Raise Issues. Contribute. Make Your City Better.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Report problems like broken roads, garbage, water issues or illegal
          construction & support solutions with contributions.
        </p>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
          Explore Issues
        </button>
      </div>

      {/* Right Banner Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co/Yfc3qcR/community-people.png"
          alt="community"
          className="w-[350px] md:w-[450px]"
        />

        
      </div>

      
    </div>
    
{/* Category Section */}
<section className="py-12 px-4 sm:px-8 md:px-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
    Issue Categories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Garbage */}
    <div className="bg-green-100 hover:bg-green-200 transition-all p-6 rounded-xl shadow-md text-center cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1596079897857-c5f3b9927bb7?auto=format&fit=crop&w=400&q=80"
        alt="Garbage"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-800">Garbage</h3>
      <p className="text-sm text-gray-600 mt-1">
        Report overflowing garbage in your area.
      </p>
    </div>

    {/* Illegal Construction */}
    <div className="bg-yellow-100 hover:bg-yellow-200 transition-all p-6 rounded-xl shadow-md text-center cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80"
        alt="Illegal Construction"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-800">Illegal Construction</h3>
      <p className="text-sm text-gray-600 mt-1">
        Report unauthorized or unsafe buildings.
      </p>
    </div>

    {/* Broken Public Property */}
    <div className="bg-red-100 hover:bg-red-200 transition-all p-6 rounded-xl shadow-md text-center cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1601758173927-7e3c4239e0a2?auto=format&fit=crop&w=400&q=80"
        alt="Broken Public Property"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-800">Broken Public Property</h3>
      <p className="text-sm text-gray-600 mt-1">
        Report damaged roads, benches, or streetlights.
      </p>
    </div>

    {/* Road Damage */}
    <div className="bg-blue-100 hover:bg-blue-200 transition-all p-6 rounded-xl shadow-md text-center cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1603415526960-f9c5c5b4f2b2?auto=format&fit=crop&w=400&q=80"
        alt="Road Damage"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg text-gray-800">Road Damage</h3>
      <p className="text-sm text-gray-600 mt-1">
        Report potholes and damaged streets.
      </p>
    </div>
  </div>
</section>


{/* Latest Issues Section */}
<div className="px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-900">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    Latest Reported Issues
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Issue Card 1 */}
    <div className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 shadow hover:shadow-lg p-5 space-y-3">
      <img
        src="https://i.ibb.co/xLd1hDb/garbage-area.jpg"
        alt="Garbage"
        className="h-48 w-full object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold">Garbage Overflowing on Street</h3>
      <p className="text-sm opacity-80">Location: Mirpur, Dhaka</p>
      <p className="text-sm opacity-80">Collected: 10,500৳ raised</p>
      <button className="w-full py-2 rounded-lg bg-primary text-white hover:bg-primary/90">
        View Details
      </button>
    </div>

    {/* Issue Card 2 */}
    <div className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 shadow hover:shadow-lg p-5 space-y-3">
      <img
        src="https://i.ibb.co/D7L9ChW/broken-road.jpg"
        alt="Damaged Road"
        className="h-48 w-full object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold">Dangerous Damaged Road</h3>
      <p className="text-sm opacity-80">Location: Mohammadpur, Dhaka</p>
      <p className="text-sm opacity-80">Collected: 6,200৳ raised</p>
      <button className="w-full py-2 rounded-lg bg-primary text-white hover:bg-primary/90">
        View Details
      </button>
    </div>

    {/* Issue Card 3 */}
    <div className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 shadow hover:shadow-lg p-5 space-y-3">
      <img
        src="https://i.ibb.co/d4SfJDx/water-problem.jpg"
        alt="Water Issue"
        className="h-48 w-full object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold">Drinking Water Crisis</h3>
      <p className="text-sm opacity-80">Location: Uttara, Dhaka</p>
      <p className="text-sm opacity-80">Collected: 15,000৳ raised</p>
     <div className="text-center mt-8">
  <Link
    to="/issues"
    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
  >
    View All Issues
  </Link>
</div>

    </div>
  </div>

  <div className="text-center mt-8">
    <a href="/issues" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
      View All Issues
    </a>
  </div>
</div>

{/* Recent Complaints Section */}
<section className="py-12 px-4 sm:px-8 md:px-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
    Recent Complaints
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Dummy Issue Card */}
    {[1, 2, 3, 4, 5, 6].map((issue) => (
      <div
        key={issue}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1596079897857-c5f3b9927bb7?auto=format&fit=crop&w=600&q=80"
          alt="Issue"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800">
            Issue Title {issue}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Short description of the issue. Lorem ipsum dolor sit amet.
          </p>
          <p className="text-sm text-gray-500 mt-2">Category: Garbage</p>
          <p className="text-sm text-gray-500">Location: Dhaka</p>
          <div className="mt-4">
            <Link
              to={`/issue/${issue}`}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 text-sm"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Community Stats Section */}
<section className="py-16 bg-gray-100 mt-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
      Our Community Impact
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">145+</h3>
        <p className="text-gray-600 mt-2 text-sm">Issues Resolved</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">$12,450+</h3>
        <p className="text-gray-600 mt-2 text-sm">Community Donation</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">680+</h3>
        <p className="text-gray-600 mt-2 text-sm">Active Members</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">32+</h3>
        <p className="text-gray-600 mt-2 text-sm">Cities Covered</p>
      </div>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
      How It Works
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      {/* Step 1 */}
      <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-primary text-white rounded-full">
          1
        </div>
        <h3 className="text-xl font-semibold mt-4">Report an Issue</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Share public problems in your area — damaged road, garbage spot, or illegal construction.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-primary text-white rounded-full">
          2
        </div>
        <h3 className="text-xl font-semibold mt-4">Community Helps</h3>
        <p className="text-gray-600 mt-2 text-sm">
          People donate funds or volunteer to solve the problem together.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-primary text-white rounded-full">
          3
        </div>
        <h3 className="text-xl font-semibold mt-4">Issue Solved</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Work is completed, and the community can see real progress & transparency.
        </p>
      </div>

    </div>
  </div>
</section>

  </>

    
  );
};

export default Home;
