import React from 'react'
import './SearchResult.css'
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";
////////////////////////////////////////
// import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
//////////////////////////////////////
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const labels = {
    0.5: 'Useless',
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5:'Excellent'
  
  };
  
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
       
        maxWidth: 345,
      media: {
        height: 140,},
        // width: '100%',
    // maxWidth: 360,
    },

  });

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    return (
        <div className='searchResult'>
            

            <img src={img} alt="" />
            <div className="searchResult-stars">
                        {/* <StarIcon className="searchResult-star" /> */}
                        <p>
                        <div className={classes.root}>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                    />
                    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                </div>
                        </p>
                    </div>

            <div className='searchResult-info'>
                <div className="searchResult-infoTop">
                        <div className="toppy">
                        <ListItem>
                        <Typography>
                    <h4>{title}</h4>
                    </Typography>
                    </ListItem>
                            <h3 className="searchResult-heart">{price}</h3>
                        </div>
                        
                    <p>{description}</p>
                </div>

                <div className="searchResult-infoBottom">
                    
                    <div className='searchResult-price'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult



// Line 6:   'Button' is defined but never used          no-unused-vars
// Line 11:  'Card' is defined but never used            no-unused-vars
// Line 12:  'CardActionArea' is defined but never used  no-unused-vars
// Line 13:  'CardActions' is defined but never used     no-unused-vars
// Line 14:  'CardContent' is defined but never used     no-unused-vars
// Line 15:  'CardMedia' is defined but never used       no-unused-vars
// Line 16:  'List' is defined but never used            no-unused-vars
// Line 18:  'ListItemText' is defined but never used    no-unused-vars
// Line 19:  'Divider' is defined but never used         no-unused-vars
// Line 42:  Duplicate key 'width'                       no-dupe-keys
// Line 43:  Duplicate key 'maxWidth'                    no-dupe-keys
