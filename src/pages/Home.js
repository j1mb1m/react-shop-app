import React from 'react';
import Footer from "../component/Footer";
import Subscription from "../component/Subscription";
import CarouselBox from '../component/CarouselBox';
import Header from '../component/Header';

function Home() {
  return (
    <div className="App">
      <div className="headerBackground ">
        <div className="contentSize title" >
          <p>Новая коллекция</p>
          <div></div>
          <p>Смотреть новинки</p>
        </div>
        <Header />
      </div>
      <div className="contentSize category">
        <h2>
          Категории
        </h2>
        <CarouselBox />
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
