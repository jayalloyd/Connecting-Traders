import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './stats';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Pricing from './pricing';
import Footer from '../Footer';
function HomePage() {
    return ( 
<>
<NavBar/>
<Hero/>
<Awards/>
<Stats/>
<Pricing/>
<Education/>
<OpenAccount/>
<Footer/>



</>



     );
}

export default HomePage;
