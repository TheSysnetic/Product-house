import Banner from "./components/home/banner";
import WhatWeDo from "./components/home/what-we-do";
import BottomNavbar from "./components/navbar/bottom-navbar";
import TopNavbar from "./components/navbar/top-navbar";

export default function Home() {

  return (
    <>
      <TopNavbar/>
      <BottomNavbar/>
      <Banner/>
      <WhatWeDo/>
    </>
  );
}
