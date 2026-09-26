 import React from 'react';
// import MemoryPage from './components/memories/page';
import HeroSection from './components/herosection/hero';
import Navbar from './components/navber/navber';
import BirthDayList from './components/birthdayList/BirthDayList';
import Card, { HeorBanner } from './components/herosection/heorBanner';
import BabuDudu from './components/herosection/babu01';
import Maruf from './components/herosection/maruf';
//  import MemoryPage from './components/memories/page';
 
 const page = () => {
  return (
    <div>
      
       {/* <MemoryPage /> */}
       <HeroSection />
      <HeorBanner />
      <BabuDudu />
      <Maruf />
       {/* <BirthDayList /> */}
    </div>
  );
 };
 
 export default page;