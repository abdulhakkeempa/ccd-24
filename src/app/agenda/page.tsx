import Header from "../components/Header";
import React from 'react';
import AccordionItem from "../components/Accordion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const agendaList = [
  {
    "track": "Main Hall",
    "sessions": [
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      }
    ]
  },
  {
    "track": "Track - 1",
    "sessions": [
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      }
    ]
  },
  {
    "track": "Track - 2",
    "sessions": [
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      },
      {
        "title": "Keynote",
        "time": "10:00 AM - 11:00 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Panel Discussion",
        "time": "1:00 PM - 2:00 PM",
        "speaker": "Various Speakers"
      }
    ]
  },
];




export default function Agenda() {
  return (
    <div>
      <Navbar/>
      <Header title="Agenda"/>
      <div className="mx-4 md:mx-24 mt-6">
        {agendaList.map((track, trackIndex) => (
          <div key={trackIndex}>
            <h3 className="text-2xl font-bold">{track.track}</h3>
            <div className="py-6">
              {track.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="flex flex-col items-center gap-4">
                  <AccordionItem 
                    title={session.title} 
                    time={session.time} 
                    speaker={session.speaker}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}