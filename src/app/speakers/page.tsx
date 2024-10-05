import React from 'react';
import SpeakerCard from '../components/SpeakerCard';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Generate the speaker list
const speakers = [
  {
    image: '/images/speakers/Abirami.jpeg',
    name: 'Abirami Sukumaran',
    designation: 'Lead Developer Advocate at Google',
    company: ""
  },
  {
    image: '/images/speakers/Arun Tej.jpeg',
    name: 'Arun Teja Godavarthi',
    designation: 'Developer Relations at Google for Developers',
    company: ""
  },
  {
    image: '/images/speakers/Dana Vishnu.jpg',
    name: 'Dana Vishnu',
    designation: 'Software Engineer II at Microsoft',
    company: ""
  },
  {
    image: '/images/speakers/Deepu.jpeg',
    name: 'Deepu Xavier',
    designation: 'Co-founder at ZappyHire',
    company: ""
  },
  {
    image: '/images/speakers/Nitin Suresh.jpg',
    name: 'Nitin Suresh',
    designation: 'Senior Associate, Product Management at ZappyHire',
    company: ""
  },
  {
    image: '/images/speakers/Rejion Jose.jpg',
    name: 'Rejin Jose K',
    designation: 'Deputy Manager Business Analytics at Allianz Services',
    company: ""
  },
  {
    image: '/images/speakers/Sachin.jpg',
    name: 'Sachin Kumar',
    designation: 'Senior VP of Product Engineering at Intellitek.AI',
    company: "Google Developer Expert, Google for Startups Accelerator Mentor"
  },
  {
    image: '/images/speakers/Abhishek.JPG',
    name: 'Abhishek Sharma',
    designation: 'Senior Cloud Engineer at Searce Inc.',
    company: "Google Developer Expert for GCP"
  },
  {
    image: '/images/speakers/Anubhav Singh.png',
    name: 'Anubhav Singh',
    designation: 'Co-founder at Callchimp.ai',
    company: "Google Developer Expert for ML & GCP"
  },
  {
    image: '/images/speakers/Varun.png',
    name: 'Varun Raj',
    designation: 'Co-founder & CIO at Skcript',
    company: "Google Developer Expert for Firebase"
  },
  {
    image: '/images/speakers/Ayush.jpg',
    name: 'Aayush Arora',
    designation: 'Founder at FilterPixel',
    company: "Google Developer Expert for GCP"
  },
  {
    image: '/images/speakers/Biswanath.jpeg',
    name: 'Biswanath',
    designation: 'Google Cloud Principal Architect',
    company: "Google Developer Expert for GCP"
  },
];


const SpeakersPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Header title='Speakers'/>
      <div className="grid grid-cols-1 gap-12 md:gap-24 sm:grid-cols-2 lg:grid-cols-3 py-12">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>  
      <Footer/>
    </div>
  );
};

export default SpeakersPage;
