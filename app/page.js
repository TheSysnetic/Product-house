import Footer from "./components/footer/footer";
import Banner from "./components/home/banner";
import GetInTouch from "./components/home/get-in-touch";
import WhatWeDo from "./components/home/what-we-do";
import WhatWeOffer from "./components/home/what-we-offer";
import BottomNavbar from "./components/navbar/bottom-navbar";
import TopNavbar from "./components/navbar/top-navbar";

export default function Home() {

  return (
    <>
      <TopNavbar/>
      <BottomNavbar/>
      <Banner/>
      <WhatWeDo/>
      <WhatWeOffer/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}
