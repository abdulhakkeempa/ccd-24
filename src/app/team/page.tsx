import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

const teamList = [
  {
    "name": "Abdul Hakkeem P A",
    "role": "Execom Member",
    "image": "/images/team/hakkeem.jpeg",
    "linkedin": "https://linkedin.com/in/abdul-hakkeem-pa",
  },
]


export default function Team() {
  return (
    <div>
      <Navbar/>
      <Header title='Our Team'/>
      <div className="grid grid-cols-2 gap-12 md:gap-6 md:gap-y-12 sm:grid-cols-2 lg:grid-cols-4 py-12 mx-4">
          {teamList.map((team, index) => (
            <TeamCard key={index} team_member={team} />
          ))}
      </div>  
      <Footer/>
    </div>
  );

}