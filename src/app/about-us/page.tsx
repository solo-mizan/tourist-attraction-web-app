import WhatWeDo from "@/components/utils/what-we-do";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
            <div className=" p-10">
                <div className="p-10">
                    <h3 className="text-lg">About Us</h3>
                    <h1 className="text-5xl text-blue-950 font-sans">Travel Agency provides beautiful Dream Place for you!</h1>
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Who We Are</h2>
                    <p className="font-sans font-thin text-gray-900">We are a team of passionate travelers and tech enthusiasts dedicated to making travel planning easier, more exciting, and accessible for everyone. Whether you&apos;re a solo adventurer, a couple looking for a romantic getaway, or a family planning your dream vacation, we bring you the best insights into the most stunning tourist spots around the globe.</p>
                </div>
                <div className="p-10">
                    <WhatWeDo />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="font-sans font-thin text-gray-900">Our mission is to inspire and empower people to explore the world and create unforgettable memories. We believe that travel is a transformative experience that enriches our lives and broadens our horizons. That&apos;s why we&apos;re committed to providing you with the best travel tips, advice, and resources to help you plan your next adventure.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;