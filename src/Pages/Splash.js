import React from 'react'
import CallToAction1 from "../Components/CallToAction1";
import CallToAction2 from "../Components/CallToAction2";
import CallToAction3 from "../Components/CallToAction3";
import TrendingSlider from '../Components/TrendingSlider';
import SplashCard1 from '../Components/SplashCard1';
import SplashCard2 from '../Components/SplashCard2';

const Splash = ({awsURL, imgBaseURL}, props) => {
return (
    <div>
        <TrendingSlider/>
        <CallToAction1/>
        <SplashCard1 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
        <CallToAction2/>
        <SplashCard2 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
        <CallToAction3/>
        <SplashCard1 awsURL={awsURL} imgBaseURL={imgBaseURL}/>
    </div>
) 
}

export default Splash