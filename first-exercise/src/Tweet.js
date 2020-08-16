import React from 'react';
import Stats from './Stats.js';

// Module component for our 'Tweet'
function Tweet(props) {
    // When this is called, the tweet RETURNS this information
    return (
        <div className="tweet">

            <div className="authorinfo">
                <li><span id="author"><strong>{props.author}</strong></span></li>
                <li><label id="handle" for="author">{props.handle}</label></li>
            </div>

            <p>{props.content}</p>

            < Stats />

        </div> 
    );
}

// exports this function from the file to be used in App.js
export default Tweet;