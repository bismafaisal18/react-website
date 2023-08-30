import React from 'react';
import '../Products/index.css';

function Products() {
  return (

    <>
      <section className="text-gray-600 body-font center-items">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 sm:flex-center text-center">



            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/bats_green.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                3B PRO EDITION (GREEN SERIES)
              </h2>
              
              <p className="leading-relaxed text-base">Pkr 40,000.00</p>
              <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                  <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>


            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/bats_pink.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                3B SUPER EDITION(RED SERIES)
              </h2>
              <p className="leading-relaxed text-base">Pkr 27,000.00</p>
              <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                  <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>


            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/bats_blue.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                3B PRO EDITION (LIMITED SERIES)
              </h2>
              <p className="leading-relaxed text-base">Pkr 45,000.00</p>
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

      </section>
      <div className="space-below-button"></div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/blue_pa.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 text-center">
                3B PLAYER EDITION BATTING PADS
              </h2>
              <p className="leading-relaxed text-base text-center">Pkr 7,500.00</p>
              <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                  <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>
            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/btp1.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                3B PRO EDITION BATTING PADS
              </h2>
              <p className="leading-relaxed text-base">Pkr 7,500.00</p>
              <div className="flex justify-center items-center p-4">
                <a href="https://wa.me/923268810307">
                  <button className="py-2 px-4 bg-yellow-400 text-black rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>
            <div className="w-64 h-96 mx-auto my-auto flex flex-col items-center justify-center">
              <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain"
                  src="../../images/gloves_white.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                3B PRO EDITION BATTING PADS
              </h2>
              <p className="leading-relaxed text-base">Pkr 5000.00</p>
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
      </section>
    </>
  );
}

export default Products;
