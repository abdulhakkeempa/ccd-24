import React from 'react';
import SpeakerCard from '../components/SpeakerCard';
import Header from '../components/Header';

// Generate the speaker list
const speakers = [
  {
    image: '/images/speaker-1.jpeg',
    name: 'Abhirami Sukumaran',
    designation: 'Developer Advocate, Google',
  },
  {
    image: '/images/speaker-1.jpeg',
    name: 'Kiran S Raj',
    designation: 'Lead Data Scientist, BuildNxt',
  },
  {
    image: '/images/speaker-1.jpeg',
    name: 'John Smith',
    designation: 'CEO, Company C',
  },
  {
    image: '/images/speaker-1.jpeg',
    name: 'Abhirami Sukumaran',
    designation: 'Developer Advocate, Google',
  },
  {
    image: '/images/speaker-1.jpeg',
    name: 'Kiran S Raj',
    designation: 'Lead Data Scientist, BuildNxt',
  },
  {
    image: '/images/speaker-1.jpeg',
    name: 'John Smith',
    designation: 'CEO, Company C',
  },
];


const SpeakersPage: React.FC = () => {
  return (
    <div>
      <Header title='Speakers'/>
      <div className="grid grid-cols-1 gap-12 md:gap-24 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>  
    </div>
  );
};

export default SpeakersPage;