import React, { useState } from 'react';

const FillInTheBlank = ({ sentence, blankPosition, correctWord }) => {
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const checkAnswer = () => {
        setIsCorrect(userInput.toLowerCase() === correctWord.toLowerCase());
    };

    const sentenceParts = sentence.split(' ');
    sentenceParts[blankPosition] = (
        <input type='text' value={userInput} onChange={handleInputChange} />
    );

    return (
        <div>
            <h4>Fill in the Blank</h4>
            <p>{sentenceParts.map((part, index) => <span key={index}>{part} </span>)}</p>
            <button onClick={checkAnswer}>Check Answer</button>
            {isCorrect !== null && (
                <p>{isCorrect ? 'Correct!' : 'Sorry, try again.'}</p>
            )}
        </div>
    );
};

export default FillInTheBlank;
