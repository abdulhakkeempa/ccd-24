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
        "title": "Registration",
        "time": "8:45 AM - 9:25 AM",
        "speaker": ""
      },
      {
        "title": "Building Agentic Applications with Cloud Databases and Serverless Runtimes",
        "time": "9:30 AM - 10:15 AM",
        "speaker": "Abirami Sukumaran"
      },
      {
        "title": "About Google Developer Groups",
        "time": "10:20 AM - 10:55 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Rejuvenate",
        "time": "11:00 AM - 11:20 AM",
        "speaker": ""
      },
      {
        "title": "Gemini",
        "time": "11:25 AM - 11:40 AM",
        "speaker": "Arun Teja Godavarthi"
      },
      {
        "title": "Brief Overview of the Event",
        "time": "11:45 AM - 12:00 PM",
        "speaker": ""
      },
      {
        "title": "Through My Eyes: A Developer Retrospective",
        "time": "12:05 PM - 12:40 PM",
        "speaker": "Rejin Jose K"
      },
      {
        "title": "Lunch break",
        "time": "12:45 PM - 2:00 PM",
        "speaker": ""
      },
      {
        "title": "Reveal",
        "time": "5:20 PM - 5:35 PM",
        "speaker": ""
      },
      {
        "title": "Closing Notes",
        "time": "5:45 PM - 6:00 PM",
        "speaker": ""
      },
      {
        "title": "Networking",
        "time": "6:00 PM - 6:20 PM",
        "speaker": ""
      }
    ]
  },
  {
    "track": "Track 1",
    "sessions": [
      {
        "title": "Interactives",
        "time": "2:00 PM - 2:15 PM",
        "speaker": ""
      },
      {
        "title": "Building Powerful AI Agents using Vertex AI Agent Builder",
        "time": "2:20 PM - 2:55 PM",
        "speaker": "Sachin Kumar"
      },
      {
        "title": "Building AI Apps with Firebase Genkit and Gemini",
        "time": "3:05 PM - 3:40 PM",
        "speaker": "Varun Raj"
      },
      {
        "title": "Web Security Essentials for Developers",
        "time": "3:50 PM - 4:25 PM",
        "speaker": "Dana Vishnu"
      },
      {
        "title": "Generative AI: Revolutionizing Product Development",
        "time": "4:35 PM - 5:10 PM",
        "speaker": "Deepu Xavier, Nithin Suresh"
      }
    ]
  },
  {
    "track": "Track 2",
    "sessions": [
      {
        "title": "Interactives",
        "time": "2:00 PM - 2:15 PM",
        "speaker": ""
      },
      {
        "title": "Exploring Goroutines as Cognitive Threads in Go",
        "time": "2:20 PM - 2:55 PM",
        "speaker": "Anubhav Singh"
      },
      {
        "title": "Unleashing the Potential of GKE for Next-Level Solutions",
        "time": "3:05 PM - 3:40 PM",
        "speaker": "Abhishek Sharma"
      },
      {
        "title": "Streamlining GenAI with Google Cloud Workflows",
        "time": "3:50 PM - 4:25 PM",
        "speaker": "Aayush Arora"
      },
      {
        "title": "Securing the Future: Safeguarding GenAI Systems",
        "time": "4:35 PM - 5:10 PM",
        "speaker": "Biswanath Giri"
      }
    ]
  }
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
