import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/CountdownTimer";
import TextCard from "./components/TextCard";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-col justify-center items-center py-36">
        <Image 
          src="https://ccd.gdgcloudkochi.com/static/media/Logo-Center.9ca41407952f70a813f2c2edfe751df4.svg"
          alt="logo"
          width={700}
          height={500}
          className="w-full max-w-[700px] h-auto"
        />
        <div className='mt-4'>
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              <Link href="https://konfhub.com/google-cloud-community-day-kochi-2024">Register Now</Link> 
            </button>
        </div>
      </div>
      <div className="container w-full bg-gray-600 mx-auto p-5">
        <Countdown />
      </div>
      <div className="px-4 md:px-24">
        <div className="p-5 py-12">
          <h1 className="text-4xl font-semibold text-gray-800">What is Cloud Community Day?</h1>
          <p className="text-base font-semibold text-gray-800">
            A full-day tech event organized by GDG Cochin and GDG Cloud Kochi, designed for professionals, startups and
            inquisitive developers.
            Focuses on cloud technologies, innovation, and the AI
            revolution.
            Features renowned speakers like Googlers, Google Developer
            Experts, Startup Founders, and industry experts.
            Attracts developers and tech enthusiasts from across Kerala.
            Poised to be the ,
            offering exceptional reach and engagement.
          </p>
          <div className="pt-5">
            <h1 className="text-xl font-semibold text-gray-900">Why should you attend this?</h1>
            <ul className="gap-2">
              <li>· Master AI applications: Learn how to leverage AI across industries and unlock its potential for your business.</li>
              <li>· Explore cutting-edge Cloud technologies: Discover the latest Google Cloud tools and services, and how they can empower your initiatives.</li>
              <li>· Learn from real-world examples: See how other organizations are successfully using AI and Google Cloud to achieve their goals.
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="px-4 md:px-24">
        <div className="p-5">
          <h1 className="text-4xl font-semibold text-gray-800">What to expect?</h1>
          <div className="grid grid-cols-1 gap-6 md:gap-24 sm:grid-cols-2 lg:grid-cols-3 py-6">
            <div className={`w-full p-4 bg-red-500 rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Explore</h1>
              <p className="mt-2 text-base font-semibold text-gray-800">Join technical sessions and Q&As to help you apply the best practices from experts.</p>
            </div>
            <div className={`w-full p-4 bg-green-500 rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Learn</h1>
              <p className="mt-2 text-base font-semibold text-gray-800">Get hands-on with instructor-led workshops and check out the latest demos.</p>
            </div>
            <div className={`w-full p-4 bg-yellow-500 rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Connect</h1>
              <p className="mt-2 text-base font-semibold text-gray-800">Network with the people who build the technology you love. You can also expand your network and meet with other developers from India.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
