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

      <h3>If you want some practice, fill in the props above.</h3>
      <h3>Or, create your own components with their own props.</h3>
      <h3>How we look at the number of likes and favourites will be covered in
        our next exercise, the state.
      </h3>
    </div>
  );
} 

// exports this file to be used when rendering the page
// take a look at /src/index.js and find this component
export default App;
