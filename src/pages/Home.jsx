import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
  <>
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
<div className="px-6 md:px-16 py-12">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
    Report Problems by Category
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer text-center space-y-3 border dark:border-gray-700">
      <img src="https://i.ibb.co/BzGTfW5/garbage.png" alt="garbage" className="w-14 mx-auto" />
      <h3 className="text-lg font-semibold">Garbage</h3>
    </div>

    {/* Card 2 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer text-center space-y-3 border dark:border-gray-700">
      <img src="https://i.ibb.co/X5q3J75/road.png" alt="road" className="w-14 mx-auto" />
      <h3 className="text-lg font-semibold">Damaged Roads</h3>
    </div>

    {/* Card 3 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer text-center space-y-3 border dark:border-gray-700">
      <img src="https://i.ibb.co/nPZcPc7/water.png" alt="water" className="w-14 mx-auto" />
      <h3 className="text-lg font-semibold">Water Issues</h3>
    </div>

    {/* Card 4 */}
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer text-center space-y-3 border dark:border-gray-700">
      <img src="https://i.ibb.co/s5BbNvC/construction.png" alt="construction" className="w-14 mx-auto" />
      <h3 className="text-lg font-semibold">Illegal Construction</h3>
    </div>
  </div>
</div>


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

{/* Community Stats Section */}
<div className="bg-green-50 py-12 mt-12">
  <h2 className="text-2xl font-semibold text-center mb-8 text-green-800">
    Community Impact Stats
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold text-green-700">1,250+</h3>
      <p className="text-gray-600 mt-1">Registered Users</p>
    </div>

    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold text-green-700">480+</h3>
      <p className="text-gray-600 mt-1">Reported Issues</p>
    </div>

    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold text-green-700">260+</h3>
      <p className="text-gray-600 mt-1">Solved Problems</p>
    </div>
  </div>
</div>


  </>

    
  );
};

export default Home;
