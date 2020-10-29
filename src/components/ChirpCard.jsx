import React from 'react';

const ChirpCard = ({ pizza }) => {
    return (
        <div className="col-md-8">
            <div className="jumbotron shadow">
                <h1 className="display-4">{pizza.userName}</h1>
                <p className="lead">{pizza.message}</p>
            </div>
        </div>
    );
}

export default ChirpCard;