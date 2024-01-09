import React, { useState } from 'react';

const SentenceConstruction = ({ sentenceParts, correctOrder }) => {
    const [userOrder, setUserOrder] = useState([]);

    // More complex logic will be needed for drag and drop or selecting sentence parts.
    // For now, assume userOrder is an array of string indices denoting the order.

    const checkAnswer = () => {
        return JSON.stringify(userOrder) === JSON.stringify(correctOrder);
    };

    return (
        <div>
            <h4>Sentence Construction</h4>
            <div>
                {userOrder.map(index => (
                    <span key={index}>{sentenceParts[index]} </span>
                ))}
            </div>
            <button onClick={checkAnswer}>Check Answer</button>
        </div>
    );
};

export default SentenceConstruction;
