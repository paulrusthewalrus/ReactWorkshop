import React from 'react';

function Stats(props) {
    return (
        <>
            <p>Likes: <strong>{props.likes}</strong></p>
            <p>Favourites: <strong>{props.favourites}</strong></p>
        </>
    );
}

export default Stats;