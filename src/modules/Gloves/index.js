import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import '../Gloves/index.css';
function Gloves() {
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
    <div className='allign'>
<section className="text-gray-600 body-font">
    <div className="flex flex-wrap h-auto py-32 px-10 relative mb-4 mt-2 bann"> {/* Add 'bann' class */}
        <img
            alt="gallery"
            className="w-full h-full object-cover object-center block absolute inset-0"
            src="../../images/gloves_ban.png"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        />
    </div>
</section>
      

        <section className="text-gray-600 body-font py-12">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
                <div className="flex flex-col h-full rounded-md">
                  <div className="flex-grow">
                    <div className='banner-image'>

                      <div className="block relative rounded overflow-hidden" style={{ height: '500px' }}>
                        <img
                          alt="ecommerce"
                          className="object-cover-fill object-center w-full h-full block"
                          src="../../images/gloves_redwhite.png"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-center content">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Bating Gloves</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">3B SUPER EDITION BATTING GLOVES</h2>
                      <p className="mt-1">Pkr 5000.00</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4">
                    <a href="https://wa.me/923268810307">
                      <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
                        BUY NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
                <div className="flex flex-col h-full rounded-md">
                  <div className="flex-grow">
                    <div className="block relative rounded overflow-hidden" style={{ height: '500px' }}>
                      <img
                        alt="ecommerce"
                        className="object-cover-fill object-center w-full h-full block"
                        src="../../images/gloves_blue.png"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Bating Gloves</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">3B PRO EDITION BATTING GLOVES</h2>
                      <p className="mt-1">Pkr 6000.00</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4">
                    <a href="https://wa.me/923268810307">
                      <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
                        BUY NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font py-12">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="lg:w-1/3 md:w-1/2 p-4 product-item">
                <div className="flex flex-col h-full rounded-md">
                  <div className="flex-grow">
                    <div className="block relative rounded overflow-hidden" style={{  height: '500px' }}>
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src="../../images/gloves_white.png"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Bating Gloves</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">3B POWER EDITION BATTING GLOVES</h2>
                      <p className="mt-1">Pkr 5000.00</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4">
                    <a href="https://wa.me/923268810307">
                      <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
                        BUY NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Gloves;
