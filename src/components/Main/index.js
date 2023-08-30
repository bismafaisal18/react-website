import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full lg:w-1/3 object-center rounded mt-0 flex-shrink-0">
              <div className="h-64 md:h-auto">
                <img
                  alt="ecommerce"
                  className="w-full h-full lg:object-cover object-contain object-center rounded"
                  src="../../images/bats_blue.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                3B Sports
              </h2>
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                PRO EDITION(LIMITED SERIES)
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                ENGLISH WILLOW BAT
              </h1>
              <div className="flex mb-4">
                {/* Ratings */}
              </div>
              <p className="leading-relaxed text-center lg:text-left">
                This bat is made from the finest quality English willow, ensuring exceptional performance and durability.
              </p>
              <p className="text-center lg:text-left">
                It offers players excellent power and control, allowing for confident strokes and precise shots.
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Other elements */}
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Pkr 45,000.00
                </span>
                <div className="ml-4">
                  <Link to="/bats-product">
                    <button
                      onClick={() => navigate("/bats-product")}
                      className="flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                    >
                      Show More Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

     

      </section>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="w-full lg:w-1/3 object-center rounded mt-0 flex-shrink-0">
              <div className="h-64 md:h-auto">
                <img
                  alt="ecommerce"
                  className="w-full h-full lg:object-cover object-contain object-center rounded"
                  src="../../images/gloves_redwhite.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="text-center lg:text-left">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  <span className="lg:inline-block">3B Sports</span>
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  <span className="lg:inline-block">SUPER EDITION BATTING GLOVES</span>
                </h1>
                <div className="flex mb-4">
                  {/* Ratings */}
                </div>
                <p className="leading-relaxed text-center lg:text-left">
                  These gloves are made from the finest quality materials, ensuring exceptional comfort and protection.
                </p>
                <p className="text-center lg:text-left">
                  They provide a secure grip and optimal flexibility, allowing for precise handling and improved performance.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-start">
                  {/* Other elements */}
                </div>
                <div className="flex justify-start">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Pkr 5000.00
                  </span>
                  <div className="ml-4">
                    <Link to="/gloves-alll">
                      <button
                        onClick={() => navigate("/gloves-alll")}
                        className="flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                      >
                        Show More Products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full lg:w-1/3 object-center rounded mt-0 flex-shrink-0">
              <div className="h-64 md:h-auto">
                <img
                  alt="ecommerce"
                  className="w-full h-full lg:object-cover object-contain object-center rounded"
                  src="../../images/blue_pa.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                3B Sports
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                PLAYER EDITION BATTING PADS
              </h1>
              <div className="flex mb-4">
                {/* Ratings */}
              </div>
              <p className="leading-relaxed text-center lg:text-left">
                Batting pads are made  with lightweight foam and durable materials
              </p>
              <p className="text-center lg:text-left">
              They are designed for comfort and ease of movement, allowing batsmen to play shots and run between the wickets with confidence.
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Other elements */}
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Pkr 7,500.00
                </span>
                <div className="ml-4">
                  <Link to="/pads-all">
                    <button
                      onClick={() => navigate("/pads-all")}
                      className="flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                    >
                      Show More Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </>
  );
}

export default Main;
