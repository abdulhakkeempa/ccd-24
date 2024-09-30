import Header from "../components/Header";
import React from 'react';
import AccordionItem from "../components/Accordion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const agendaList = [
  {
    "title": "Keynote",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Kiran S Raj",
  },
  {
    "title": "Keynote 2",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Abhirami Sukumaran",
  },
  {
    "title": "Keynote",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Kiran S Raj",
  },
  {
    "title": "Keynote 2",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Abhirami Sukumaran",
  },
  {
    "title": "Keynote",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Kiran S Raj",
  },
  {
    "title": "Keynote 2",
    "time": "10:00 AM - 11:00 AM",
    "speaker": "Abhirami Sukumaran",
  },
]


export default function Agenda() {
  return (
    <div>
      <Navbar/>
      <Header title="Agenda"/>
      <div className="mx-4 md:mx-24 mt-6">
        <h3 className="text-2xl font-bold">Main Hall</h3>
      </div>
      <div className="mx-4 md:mx-24 py-6">
        {agendaList.map((agenda, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <AccordionItem title={agenda.title} time={agenda.time} speaker={agenda.speaker}/>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}