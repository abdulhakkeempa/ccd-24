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
        "title": "Abirami Sukumaran",
        "time": "9:30 AM - 10:15 AM",
        "speaker": "Abirami Sukumaran",
        "topic": "Building Agentic Applications with Cloud Databases and Serverless Runtimes"
      },
      {
        "title": "Kiran S Raj",
        "time": "10:20 AM - 10:55 AM",
        "speaker": "Kiran S Raj"
      },
      {
        "title": "Rejuvenate",
        "time": "11:00 AM - 11:20 AM",
        "speaker": ""
      },
      {
        "title": "Arun Teja Godavarthi",
        "time": "11:25 AM - 11:40 AM",
        "speaker": "Arun Teja Godavarthi",
        "topic": "Gemini"
      },
      {
        "title": "Brief Overview of the Event",
        "time": "11:45 AM - 12:00 PM",
        "speaker": ""
      },
      {
        "title": "Rejin Jose K",
        "time": "12:05 PM - 12:40 PM",
        "speaker": "Rejin Jose K",
        "topic": "Through My Eyes: A Developer Retrospective"
      },
      {
        "title": "Lunch break",
        "time": "12:45 PM - 2:00 PM",
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
        "title": "Sachin Kumar",
        "time": "2:20 PM - 2:55 PM",
        "speaker": "Sachin Kumar",
        "topic": "Building Powerful AI Agents using Vertex AI Agent Builder"
      },
      {
        "title": "Varun Raj",
        "time": "3:05 PM - 3:40 PM",
        "speaker": "Varun Raj",
        "topic": "Building AI Apps with Firebase Genkit and Gemini"
      },
      {
        "title": "Dana Vishnu",
        "time": "3:50 PM - 4:25 PM",
        "speaker": "Dana Vishnu",
        "topic": "Web Security Essentials for Developers"
      },
      {
        "title": "Deepu Xavier, Nithin Suresh",
        "time": "4:35 PM - 5:10 PM",
        "speaker": "Deepu Xavier, Nithin Suresh",
        "topic": "Generative AI: Revolutionizing Product Development"
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
        "title": "Anubhav Singh",
        "time": "2:20 PM - 2:55 PM",
        "speaker": "Anubhav Singh",
        "topic": "Exploring Goroutines as Cognitive Threads in Go"
      },
      {
        "title": "Abhishek Sharma",
        "time": "3:05 PM - 3:40 PM",
        "speaker": "Abhishek Sharma",
        "topic": "Unleashing the Potential of GKE for Next-Level Solutions"
      },
      {
        "title": "Aayush Arora",
        "time": "3:50 PM - 4:25 PM",
        "speaker": "Aayush Arora",
        "topic": "Streamlining GenAI with Google Cloud Workflows"
      },
      {
        "title": "Biswanath Giri",
        "time": "4:35 PM - 5:10 PM",
        "speaker": "Biswanath Giri",
        "topic": "Securing the Future: Safeguarding GenAI Systems"
      }
    ]
  },
  {
    "track": "Main Hall",
    "sessions": [
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
