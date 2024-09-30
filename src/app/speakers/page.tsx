import React from 'react';
import SpeakerCard from '../components/SpeakerCard';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Generate the speaker list
const speakers = [
  {
    image: '/images/speakers/Abirami.jpeg',
    name: 'Abhirami Sukumaran',
    designation: 'Lead Developer Advocate',
    company: "Google"
  },
  {
    image: '/images/speakers/Dana Vishnu.jpg',
    name: 'Dana Vishnu',
    designation: 'Software Engineer, Microsoft',
    company: "Microsoft"
  },
  {
    image: '/images/speakers/Abhishek.JPG',
    name: 'Abhishek Sharma',
    designation: 'Senior Cloud Engineer, Searce Inc',
    company: "Google Developer Expert for GCP"
  },
  {
    image: '/images/speakers/Sachin.jpg',
    name: 'Sachin Kumar',
    designation: 'Senior VP of Product Engineering at Intellitek.AI',
    company: "GDE, Google for Startups Accelerator Mentor"
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
    designation: 'Co-founder & CIO, Skcript',
    company: "Google Developer Expert for Firebase"
  },
  {
    image: '/images/speakers/Ayush.jpg',
    name: 'Aayush Arora',
    designation: 'Founder',
    company: "FilterPixel"
  },
  {
    image: '/images/speakers/Biswanath.jpeg',
    name: 'Biswanath',
    designation: 'Google Cloud Principal Architect',
    company: "Google Developer Expert for GCP"
  },
  {
    image: '/images/speakers/Rejion Jose.jpg',
    name: 'Rejin Jose K',
    designation: 'Deputy Manager Business Analytics',
    company: "Allianz Services"
  },
  {
    image: '/images/speakers/Deepu.jpeg',
    name: 'Deepu Xavier',
    designation: 'Co-founder',
    company: "ZappyHire"
  },
  {
    image: '/images/speakers/Nitin Suresh.jpg',
    name: 'Nitin Suresh',
    designation: 'Senior Associate- Product Management',
    company: "ZappyHire"
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