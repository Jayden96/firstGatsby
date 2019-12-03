import React from "react"
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles";


export default () => (
    
<div style={{position:'relative'}}>
    <Banner></Banner>
    <TextWrapper>
        <div>
            <h2>TravelPreneur</h2>
            <p>One Stop For<br/>
            All your Travel Needs<br/>
            And Luxury Needs<br/></p>
            <Link to="/works">Our Work</Link>       
        </div>
    </TextWrapper>
    <MoreText>Learn More</MoreText>
</div>
)