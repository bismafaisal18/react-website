import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import '../Contact/index.css';
function Contact() {


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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    const handleButtonClick = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            setShowPrompt(true); // Show the prompt
            setIsSubmitted(false); // Reset the submission state
            return;
        }
        window.alert("Customer representative will get back to you.");

        // Your submission logic here
        setIsSubmitted(true);
        setShowPrompt(false); // Hide the prompt on successful submission
    };


    return (
        <>

<section className="text-gray-600 body-font">
    <div className="flex flex-wrap h-auto py-32 px-10 relative mb-4 mt-2 bann"> {/* Add 'bann' class */}
        <img
            alt="gallery"
            className="w-full h-full object-cover object-center block absolute inset-0"
            src="../../images/contact_banner.png"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        />
    </div>
</section>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto lg:justify-start">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get In Touch</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green rounded text-lg submit-button" onClick={handleButtonClick}>Submit</button>

                                {showPrompt && <p className="text-center text-red-500 mt-2">Fill the required fields.</p>}
                                {isSubmitted && <p className="text-center text-green-500 mt-2">Form submitted successfully!</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>


    )

}

export default Contact
