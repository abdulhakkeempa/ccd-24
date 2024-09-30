import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/CountdownTimer";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-col justify-center items-center py-36">
        <Image 
          src="images/landing-image.svg"
          alt="logo"
          width={700}
          height={500}
          className="w-full max-w-[700px] h-auto"
        />
        <div className='mt-4'>
            <button className="google-blue text-white font-medium py-2 px-4 rounded">
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
          <p className="text-lg text-gray-800">
            Google Cloud Community Day 2024 is your chance to dive deep into the world of AI and Google Cloud. As the flagship event of Google Developer Groups Cloud Kochi, it&apos;s a unique opportunity to learn from industry experts, gain practical skills, and connect with fellow tech enthusiasts. Join us as we explore Google&apos;s vision of making AI and Cloud services accessible to everyone and building a thriving community together.
          </p>
          <div className="pt-5">
            <h1 className="text-xl font-semibold text-gray-900">Why should you attend this?</h1>
            <ul className="gap-2 text-lg pt-2">
              <li className="">· Master AI applications: Learn how to leverage AI across industries and unlock its potential for your business.</li>
              <li className="">· Explore cutting-edge Cloud technologies: Discover the latest Google Cloud tools and services, and how they can empower your initiatives.</li>
              <li className="">· Learn from real-world examples: See how other organizations are successfully using AI and Google Cloud to achieve their goals.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="px-4 md:px-24">
        <div className="p-5 pt-0">
          <h1 className="text-4xl font-semibold text-gray-800">What to expect?</h1>
          <div className="grid grid-cols-1 gap-6 md:gap-24 sm:grid-cols-2 lg:grid-cols-3 py-6">
            <div className={`w-full p-4 google-red rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Explore</h1>
              <p className="mt-2 text-base font-medium text-gray-800">Join technical sessions and Q&As to help you apply the best practices from experts.</p>
            </div>
            <div className={`w-full p-4 google-green rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Learn</h1>
              <p className="mt-2 text-base font-medium text-gray-800">Get hands-on with instructor-led workshops and check out the latest demos.</p>
            </div>
            <div className={`w-full p-4 google-yellow rounded-lg shadow-md mb-4`}>
              <h1 className="text-2xl font-semibold text-gray-800">Connect</h1>
              <p className="mt-2 text-base font-medium text-gray-800">Network with the people who build the technology you love. You can also expand your network and meet with other developers from India.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
