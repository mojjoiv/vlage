import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import {useHistory} from "react-router-dom";

function Banner() {
  const history = useHistory() ;

  return (
    <div className="banner-container">

      <div className="banner">
        <div className="banner-info">
          <h1>EXPERIENCE CO-LIVING</h1>
          <h5>
           Vacation with us and experience different adventures

          </h5>

         {/*we could also use <Link> but it will give and underline in button */}
         
          <Button onClick={()=>history.push('/search')} variant="outlined">Explore Nearby</Button>
          
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
