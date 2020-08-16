import React from 'react';

function Buttons(props) {
    return (
        <>
            <button onClick={props.new_like}>{props.like ? 'Unlike' : 'Like'}</button>
            <button onClick={props.new_favourite}>{props.favourite ? 'Unfavourite' : 'Favourite'}</button>
        </>
    );
}

export default Buttons;