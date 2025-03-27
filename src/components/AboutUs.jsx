import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen px-6 md:px-12">
      {/* Our Story */}
      <div className="p-6 mx-auto mb-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-light text-black">
            Our Story
          </h2>
          <p className="text-gray-800 mt-4 md:mt-2">
            Our journey began with a vision to redefine elegance in jewelry
            design. From humble beginnings in a small studio, we have grown into
            a brand cherished by over a million customers worldwide.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/heroimg.jpg" // Replace with your actual image path
            alt="Our Story"
            className="w-full h-auto md:h-[400px] rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {["90% Handcrafted", "1.2M+ Customers", "5+ Years of Excellence"].map(
          (item, index) => (
            <div key={index} className="bg-white  text-center">
              <h3 className="text-3xl font-light text-gray-800">{item}</h3>
            </div>
          )
        )}
      </div>

      {/* What We Do, Our Values, Our Mission */}
      <div className="flex flex-col md:flex-row h-auto md:h-[500px] items-center">
        <div className="w-full md:w-1/3 flex justify-center items-center text-center md:text-left">
          <h1 className="text-5xl md:text-7xl">About Us</h1>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center py-4 md:py-0">
          <div>
            <h1 className="text-2xl md:text-3xl">What we do?</h1>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, sint!
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl mt-6">Our Values</h1>
            <p className="mt-2 text-gray-700">
              Integrity, innovation, and inclusivity define us. We believe in
              creating jewelry that not only adorns but also empowers
              individuals, reflecting their unique stories and aspirations.
            </p>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl mt-6">Our Mission</h1>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, sint!
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h2 className="text-5xl font-light text-black">
          Discover Our Collection
        </h2>
        <p className="text-gray-600 mt-2">
          Experience the artistry that defines us.
        </p>
        <a
          href="/shop"
          className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
