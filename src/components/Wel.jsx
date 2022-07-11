import React from 'react';

const Wel = (props) => {
    return (
        <div className='welscreen'>
            <center>
                <h1>&#128218; Dictionary App</h1>
                <img className='searchgif' src="/englishdictionary/searchimage.gif" alt="search img" />
                <button onClick={props.callfn}>Search A Word</button>
            </center>
        </div>
    );
}

export default Wel;
