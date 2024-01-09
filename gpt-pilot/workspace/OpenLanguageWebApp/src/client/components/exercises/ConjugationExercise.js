import React, { useState } from 'react';

const ConjugationExercise = ({ baseVerb, correctConjugation }) => {
    const [userConjugation, setUserConjugation] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleInputChange = (e) => {
        setUserConjugation(e.target.value);
    };

    const checkAnswer = () => {
        setIsCorrect(userConjugation.toLowerCase() === correctConjugation.toLowerCase());
    };

    return (
        <div>
            <h4>Conjugation Exercise: {baseVerb}</h4>
            <input type='text' value={userConjugation} onChange={handleInputChange} />
            <button onClick={checkAnswer}>Check Answer</button>
            {isCorrect !== null && (
                <p>{isCorrect ? 'Correct!' : 'Sorry, try again.'}</p>
            )}
        </div>
    );
};

export default ConjugationExercise;
