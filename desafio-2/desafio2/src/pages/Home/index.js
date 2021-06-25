import React from 'react';

import Navbar from '../../components/Navbar/index'
import Footer from '../../components/Footer';
import SectionCards from '../SectionCards/index'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionCards />
      <Footer />
    </div>
  );
}