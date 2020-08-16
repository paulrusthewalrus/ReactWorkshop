import React, { useState } from 'react';
import Stats from './Stats.js';
import Buttons from './Buttons.js';

// Module component for our 'Tweet'
function Tweet(props) {

    // setting up state variables for the USER
    const [yourLike, setYourLike] = useState(false)
    const [yourFavourite, setYourFavourite] = useState(false)

    // setting up state variables for the TWEET
    const [likes, setLikes] = useState(0);
    const [favourites, setFavourites] = useState(0);

    // When this is called, the tweet RETURNS this information
    return (
        <div className="tweet" style={{backgroundColor:'#edf5ff'}}>

            <div className="authorinfo">
                <li><span id="author"><strong>{props.author}</strong></span></li>
                <li><label id="handle" for="author">{props.handle}</label></li>
            </div>

            <p>{props.content}</p>

            <div className="interaction">
                < Buttons like={yourLike} favourite={yourFavourite} new_like={() => setYourLike(!yourLike)} new_favourite={() => setYourFavourite(!yourFavourite)}/>
                < Stats likes={yourLike ? likes+1 : likes} favourites={yourFavourite ? favourites+1 : favourites}/>
            </div>

        </div> 
    );
}

// exports this function from the file to be used in App.js
export default Tweet;