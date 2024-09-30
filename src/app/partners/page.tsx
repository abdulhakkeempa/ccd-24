import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// const community = [
//   {
//     name: 'GDG Cloud Kochi',
//     link: 'https://gdg.community.dev/gdg-cloud-kochi',
//     image: 'logo_path'
//   },
//   {
//     name: 'GDG Cloud Kochi',
//     link: 'https://gdg.community.dev/gdg-cloud-kochi',
//     image: 'logo_path'
//   },
// ]


// const silverSponsor = [
//   {
//     name: 'Pattern Labs AI',
//     link: 'https://gdg.community.dev/gdg-cloud-kochi',
//     image: 'logo_path'
//   }
// ]



export default function Partners(){
  return (
    <div>
      <Navbar/>
      <Header title="Partners"/>
      <Footer/>
    </div>
  );
}