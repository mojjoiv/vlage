import React, { useState } from "react";
import "./Home.css";
import Banner from "./Banner";
import Search from './Search';
import Card from './Card';
import { Button } from "@material-ui/core";

function Home() {
  const [showSearch, setShowSearch] = useState(false);


  return (

  <div className="home-container">
        <div className="home">

        {/* <h1>home sweet home</h1> */}

        <div className="banner-search">

            <Button onClick={()=>setShowSearch(!showSearch)} 
                 variant="outline" className="banner-search-btn">
                 {showSearch?"Hide": "Search Dates"} 
            </Button>
            
            {showSearch&& <Search/>}
            
        </div>

        <Banner />

        <div className="home-section">
            {/* <Card src={"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg"}
                  title={"Online Experiences"}
                  desc={"Unique acitvities we can do together, led world of hosts"}
                 /> */}
            <Card src={"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"} 
                  title={"Unique Stays"}
                  desc={"Spaces that are most than just a place to sleep"}
                  />
                  <Card src={"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"} 
                  title={"Unique Stays"}
                  desc={"Spaces that are most than just a place to sleep"}
                  />
            <Card src={"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg"}
                  title={"Unique Stays"}
                  desc={"Comfortable private places, with rooms friends and family"}
                  />
            <Card src={"https://a0.muscache.com/im/pictures/c8653740-f58b-4836-8f2a-4021cf8f658f.jpg"}
                  title={"2 Bedroom Apartment"}
                  desc={"Get a luxuty flat with all facilities in Bangkok"}
                  price={"£60 / night"}
            />
            <Card src={"https://a0.muscache.com/im/pictures/f4a0223d-9157-4797-8ea7-9f7ed39bb00c.jpg"}
                  title={"1 Bedroom Hotel"}
                  desc={"Get free breakfast and cool view from balcany"}
                  price={"£30 / night"}
            />
            <Card src={"https://a0.muscache.com/im/pictures/297adf2c-9e07-47ea-8e5b-037e613a9779.jpg"}
                  title={"2 Bedroom Apartment"}
                  desc={"Fully facilated hotel in London"}
                  price={"£50 / night"}
            />
        </div>

        </div>
    </div>
  );
}

export default Home;
