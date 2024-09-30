import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Link from "next/link";
import Image from "next/image";

const communityPartners = [
  {
    name: 'TiE Kerala',
    link: 'https://kerala.tie.org',
    image: '/images/partners/community/w.png'
  },
  {
    name: 'Headstart',
    link: 'https://www.headstart.in/kerala',
    image: '/images/partners/community/headstart.png'
  },
  {
    name: 'G.Tech',
    link: 'https://gtechindia.org/',
    image: '/images/partners/community/gtech.jpg'
  },
  {
    name: 'Grafana Kochi',
    link: 'https://www.meetup.com/grafana-and-friends-kochi/',
    image: '/images/partners/community/Grafana Kochi.png'
  },
  {
    name: 'DevOps Malayalam',
    link: 'https://devopsmalayalam.io/',
    image: '/images/partners/community/devops.jpeg'
  },
  {
    name: 'Cloud Native Community Groups Kochi',
    link: 'https://community.cncf.io/kochi/',
    image: '/images/partners/community/cncgkochi.png'
  },
  {
    name: 'Riglabs',
    link: 'https://riglabs.co/',
    image: '/images/partners/community/[01] Logo - Riglabs - Powered by Zilicon - Dark.svg'
  },
]


const silverSponsor = [
  {
    name: 'Pattern Labs AI',
    link: 'https://www.pattern-ai.com/',
    image: "/images/partners/silver/pattern-ai-black.png"
  },
]


const giftPartner = [
  {
    name: 'Fulva',
    link: 'https://fulva.in',
    image: '/images/partners/gift/fulva.png'
  }
]


export default function Partners(){
  return (
    <div>
      <Navbar/>
      <Header title="Partners"/>
      <div className="mx-4 my-6 mt-0 md:mx-24">
        <div className="grid grid-cols-1 gap-12 md:gap-24 py-6">
          <div>
            <div className="google-grey-900  text-white py-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-center">Silver Sponsor</h1>
            </div>
            <div className="grid grid-cols-1 gap-12 md:gap-24 sm:grid-cols-1 lg:grid-cols-4 py-12">
              {silverSponsor.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                <Link href={partner.link}>
                <div className="w-36 h-36 relative">
                  <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  layout="fill" 
                  objectFit="contain" 
                  />
                </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
          <div>
            <div className="google-grey-900  text-white py-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-center">Gift Partner</h1>
            </div>
            <div className="grid grid-cols-1 gap-12 md:gap-24 sm:grid-cols-1 lg:grid-cols-4 py-12">
              {giftPartner.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                <Link href={partner.link}>
                <div className="w-36 h-36 relative">
                  <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  layout="fill" 
                  objectFit="contain" 
                  />
                </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
          <div>
            <div className="google-grey-900 text-white py-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-center">Community Partners</h1>
            </div>
            <div className="grid grid-cols-1 gap-12 md:gap-24 sm:grid-cols-1 lg:grid-cols-4 py-12">
              {communityPartners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Link href={partner.link}>
                  <div className="w-36 h-36 relative">
                    <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    layout="fill" 
                    objectFit="contain" 
                    />
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>


        </div>
      
      </div>
      <Footer/>
    </div>
  );
}