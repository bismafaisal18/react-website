import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

function Bats() {
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
    <div className="flex flex-wrap h-auto py-32 px-10 relative mb-4 mt-2 bann"> {/* Add 'bann' class */}
        <img
            alt="gallery"
            className="w-full h-full object-cover object-center block absolute inset-0"
            src="../../images/crick_banner.png"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        />
    </div>
</section>
  


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
              <div className="flex flex-col h-full rounded-md">
                <div className="flex-grow">
                  <div className="block relative rounded overflow-hidden" style={{ height: '600px' }}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="../../images/bats_blue.png"
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Cricket Bats</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">3B PRO EDITION (LIMITED SERIES)</h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium">ENGLISH WILLOW BAT</h2>
                    <p className="mt-1">Pkr 45,000.00</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                                        <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                            BUY NOW
                                        </button>
                                    </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
              <div className="flex flex-col h-full rounded-md">
                <div className="flex-grow">
                  <div className="block relative rounded overflow-hidden" style={{ height: '600px' }}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="../../images/bats_green.png"
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Cricket Bats</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">3B PRO EDITION (GREEN SERIES)</h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium">ENGLISH WILLOW BAT</h2>
                    <p className="mt-1">Pkr 40,000.00</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                                        <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                            BUY NOW
                                        </button>
                                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
              <div className="flex flex-col h-full rounded-md">
                <div className="flex-grow">
                  <div className="block relative rounded overflow-hidden" style={{ height: '600px' }}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="../../images/bats_orange.png"
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Cricket Bats</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">3B POWER EDITION BAT</h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium">ENGLISH WILLOW BAT</h2>
                    <p className="mt-1">Pkr 20,000.00</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                                        <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                            BUY NOW
                                        </button>
                                    </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
              <div className="flex flex-col h-full rounded-md">
                <div className="flex-grow">
                  <div className="block relative rounded overflow-hidden" style={{ height: '600px' }}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="../../images/bats_yellow.png"
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Cricket Bats</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">3B SUPER EDITION (GOLD SERIES)</h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium">ENGLISH WILLOW BAT</h2>
                    <p className="mt-1">Pkr 27,000.00</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                                        <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                            BUY NOW
                                        </button>
                                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/4 md:w-1/2 p-4 product-item">
              <div className="flex flex-col h-full rounded-md">
                <div className="flex-grow">
                  <div className="block relative rounded overflow-hidden" style={{ height: '600px' }}>
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="../../images/bats_pink.png"
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Cricket Bats</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">3B SUPER EDITION (RED SERIES)</h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium">ENGLISH WILLOW BAT</h2>
                    <p className="mt-1">Pkr 27,000.00</p>
                  </div>
                </div>
                <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                                        <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                            BUY NOW
                                        </button>
                                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Bats;
