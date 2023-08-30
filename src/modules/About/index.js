import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      const img = document.querySelector(".h-auto img");

      if (screenWidth < 768) {
        img.style.objectFit = "contain"; // Set object fit to cover on mobile screens
      } else {
        img.style.objectFit = "cover"; // Set object fit to contain on desktop screens
      }
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Apply initial styles

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap h-auto py-32 px-10 relative mb-4 mt-2">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block absolute inset-0"
            src="../../images/about_banner.png"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              "Welcome to 3 BROTHERS SPORTS! Founded in 2021 by our father, our family-owned company is located in Sialkot, Pakistan. We, the three brothers, Inspired by the bond of brotherhood, proudly carry the legacy of our father's vision. As Shahzaib Choudhary, Jahanzaib Choudhary, and Asad Choudhary, we now lead the way alongside our esteemed father in running this thriving factory. With a shared passion for cricket and a commitment to excellence, we specialize in manufacturing top-quality cricket bats. Our team combines traditional craftsmanship with modern techniques to create cricket bats that deliver outstanding performance on the field. At 3 BROTHERS SPORTS, we strive to uphold the values of integrity, innovation, and customer satisfaction. We take pride in our dedication to crafting exceptional cricket bats that cater to the needs of both amateur and professional players. Where our legacy lives on through the art of bat making. We look forward to serving you with our finest products and fostering a long-lasting relationship with the cricket community."
            </p>
            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">3B SPORTS</h2>
            <p className="text-gray-500">CEO</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
