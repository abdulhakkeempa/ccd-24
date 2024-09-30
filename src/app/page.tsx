import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/CountdownTimer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="w-full mx-auto items-center">
        <Image 
          src="https://ccd.gdgcloudkochi.com/static/media/Logo-Center.9ca41407952f70a813f2c2edfe751df4.svg"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div className="container w-full bg-gray-600 mx-auto p-5">
        <Countdown />
      </div>
      <div className="px-24">
        <div className="p-5">
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
        </div>
      </div>


      <div className="px-24">
        <div className="p-5">
          <h1 className="text-4xl font-semibold text-gray-800">What to expect?</h1>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
