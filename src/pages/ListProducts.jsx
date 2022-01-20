import React from 'react';
import Header from '../components/header/Header';
import Search from '../components/navBar/search/Search';
import SectionCard from '../components/sectionCards/SectionCards';
import Footer from '../components/footer/Footer';

const ListProducts = () => {
  return (
    <div>
      <Header />
      <Search />
      <SectionCard />
      <Footer />
    </div>
  );
};

export default ListProducts;
