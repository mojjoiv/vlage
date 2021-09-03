import React from 'react'
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';

const labels = {
    0.5: 'Useless',
    1: 'Useless',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
       
        maxWidth: 345,
      media: {
        height: 140,},
        
    // maxWidth: 360,
    },

  });


function SearchPage() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    return (
        <div className="SearchPage-container">
        <div className="SearchPage">
           <div className="searchpage-info">
              <p>62 stays · 26 august to  30 august · 2 guests</p>
              <h1>Stays Nearby</h1>

                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Types of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Instant Book</Button>
                <Button variant="outlined">More filter</Button>

           </div>

            <div className="SearchResult-container">
                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/aa6e9b16-4ad5-43a5-8114-85a74298c5b0.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/2c34782d-bd8e-48c3-bdf1-335eb9118b22.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/9116f64b-93e6-4b1f-a427-6f908cc7e6fa.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/b5e436c4-12ac-4ca3-a4f2-b12dae92eb91.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/f4a0223d-9157-4797-8ea7-9f7ed39bb00c.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/cee135ac-f5f1-4ad1-8141-ea9443e9fd0d.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/f5ed6750-0d12-46d1-a996-a1c7347cfc95.jpg"
                    location="Private room in center of Nairobi"
                    title="Test House"
                    price="kshs3000 / night"
                />
                
                </div>

                <div>
                 
                 <Link to="/SingleHotel" className="button4">
                 <SearchResult
                     img="https://a0.muscache.com/im/pictures/f34ff263-bf04-4c6c-9ac4-fd99f40f13b3.jpg"
                     location="Private room in center of Nairobi"
                     title="Test House"
                     price="kshs3000 / night"
                 />
                 </Link>
                 
                 </div>

                

                
               
                {/* <SearchResult
                    img="https://a0.muscache.com/im/pictures/2c17a6f1-6e49-468b-a4f7-4b488e2ab0da.jpg"
                    location="Private room in center of London"
                    title="5 Star Luxury Apartment"
                    description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                    star={3.85}
                    price="kshs9000 / night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/8b9489f2-dd3a-48b0-a13c-2400ce624974.jpg"
                    location="Private room in center of London"
                    title="Independant luxury studio apartment"
                    description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                    star={4.3}
                    price="kshs4000 / night"
                />
                <SearchResult
                    img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                    location="Private room in center of London"
                    title="London Studio Apartments"
                    description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                    star={3.8}
                    price="kshs3500 / night"
                />
                <SearchResult
                    img=" https://a0.muscache.com/im/pictures/ba9a5e2d-5a82-4295-8734-30f8b69a4c32.jpg"
                    location="Single Bedroom Italy"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                    star={4.33}
                    price="kshs2500 / night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/2c34782d-bd8e-48c3-bdf1-335eb9118b22.jpg"
                    location="Private room in center of London"
                    title="30 mins to Oxford Street, Excel London"
                    description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                    star={4.1}
                    price="kshs5500 / night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/9116f64b-93e6-4b1f-a427-6f908cc7e6fa.jpg"
                    location="Private room in center of London"
                    title="Spacious Peaceful Modern Bedroom"
                    description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                    star={5.0}
                    price="kshs6000 / night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/b5e436c4-12ac-4ca3-a4f2-b12dae92eb91.jpg"
                    location="Private room in center of London"
                    title="The Blue Room In London"
                    description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                    star={4.23}
                    price="kshs6500 / night"
                />    
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/f4a0223d-9157-4797-8ea7-9f7ed39bb00c.jpg"
                    location="Private room in center of London"
                    title="5 Star Luxury Apartment"
                    description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                    star={3.85}
                    price="kshs9000 / night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/cee135ac-f5f1-4ad1-8141-ea9443e9fd0d.jpg"
                    location="Private room in center of London"
                    title="Independant luxury studio apartment"
                    description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                    star={4.3}
                    price="kshs4000 / night"
                />
                
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/f5ed6750-0d12-46d1-a996-a1c7347cfc95.jpg"
                    location="Luxary room in center of London"
                    title="Spacious Peaceful Modern Bedroom"
                    description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                    star={5.0}
                    price="kshs6600 / night"
                />
                
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/f34ff263-bf04-4c6c-9ac4-fd99f40f13b3.jpg"
                    location="Beautifull room in center of London"
                    title="London Studio Apartments"
                    description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                    star={4.8}
                    price="kshs7700 / night"
                /> */}
    
                </div>
                {/* <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                </Card> */}
        </div>
        </div>
    )
}

export default SearchPage
