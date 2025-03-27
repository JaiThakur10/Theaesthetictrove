import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-white text-black py-20 px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-light">The Aesthetic Trove</h3>
            </div>
            <p className="text-black leading-relaxed mt-4">
              He moonlights difficult-engrossed, sportsmen. Interested has all
              Devonshire difficulty gay assistance joy. Unaffected at ye of
              compliment alteration to.
            </p>
            <button
              className="mt-6 px-6 py-3  text-black font-light rounded-full border-1 border-black hover:bg-black hover:text-white transition transform hover:scale-105"
              onClick={() => navigate("/getStarted")}
            >
              Explore Now ➝{" "}
            </button>
          </motion.div>

          {/* Quick Links Section */}
          {[
            {
              title: "Services",
              items: [
                { name: "Gold", link: "/webflow" },
                {
                  name: "Silver",
                  link: "/comingsoon",
                },
                {
                  name: "Diamond",
                  link: "/comingsoon",
                },
                { name: "UI/UX Design", link: "/comingsoon" },
              ],
            },
            {
              title: "Explore",
              items: [
                { name: "Portfolio", link: "/previouswork" },
                { name: "Case Studies", link: "/comingsoon" },
                { name: "Testimonials", link: "/comingsoon" },
                { name: "Blog", link: "/comingsoon" },
              ],
            },
            {
              title: "Company",
              items: [
                { name: "About Us", link: "/about" },
                { name: "Careers", link: "/comingsoon" },
                { name: "Contact", link: "/contact" },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-light text-black">{section.title}</h4>
              <ul className="space-y-3 text-black">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.link}
                      className="hover:text-[#CC4EC5] transition duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Partition Line */}
        <div className="mt-16 border-t border-gray-700"></div>

        {/* Newsletter and Socials */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-1/2"
          >
            <h4 className="text-xl font-light ">Stay Connected</h4>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 text-2xl"
          >
            {[
              {
                icon: <Instagram size={30} />,
                link: "https://www.instagram.com/theaesthetictrove/?hl=en",
              },
              {
                icon: <Linkedin size={30} />,
                link: "https://www.linkedin.com/company/103681884/admin/dashboard/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#CC4EC5] transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <a
          href="https://www.weularity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm cursor-pointer hover:text-green-700"
        >
          <p>
            Crafted with ❤️ by Weularity. All rights reserved. &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
