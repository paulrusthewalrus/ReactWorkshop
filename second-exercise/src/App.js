import React from 'react';
import Tweet from './Tweet.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="tweetgroup">
        < Tweet author='Volkswagen USA' handle="@VW" content="We sell lots of cars! Buy from us!"/>
        < Tweet author='7NEWS Melbourne' handle='@7NewsMelbourne' content='For more news, check our website.'/>
        < Tweet author='UQ Computing Society' handle='@UQComputing' content='Follow us on twitter!'/>
        < Tweet />
        < Tweet />
        < Tweet />
        < Tweet />

      </div>

      <hr style={{width:'80%',marginTop:'30px'}}></hr>

      <h3>A list of things you can do:</h3>
      <p>1. Give the tweets more information. Time of post, more buttons, comments</p>
    </div>
  );
} 

// exports this file to be used when rendering the page
// take a look at /src/index.js and find this component
export default App;
