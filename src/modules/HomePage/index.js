import React from 'react';
import Header from "../Navigation/Header";
import StickyFooter from "../Navigation/Footer";
import CustomSlider from '../../components/CustomSlider';
// import FeeContent from "../FeesPage";
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmockHero';
import './index.css';

const content = [
    { title: 'Leading technical solutions for a sustainable tomorrow', description: 'This is Wholesales Revolution', image:'https://source.unsplash.com/random' },
    { title: 'Second item', description: 'Lorem ipsum', image:'https://source.unsplash.com/random' }
];


const HomePage = () => (
    <div>
        <Header isHomePage={true} />
        <CustomSlider content={content}/>
        {/* <FeeContent/> */}
        <ProductHowItWorks/>
        <ProductCTA/>
        <ProductSmokingHero/>
        <StickyFooter />
        
    </div>
);

export default HomePage;
