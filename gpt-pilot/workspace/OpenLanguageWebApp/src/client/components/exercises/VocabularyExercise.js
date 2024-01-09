import React, { useState } from 'react';

const VocabularyExercise = ({ word, translation }) => {
    const [userTranslation, setUserTranslation] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleInputChange = (e) => {
        setUserTranslation(e.target.value);
    };

    const checkAnswer = () => {
        setIsCorrect(userTranslation.toLowerCase() === translation.toLowerCase());
    };

    return (
        <div>
            <h4>Vocabulary Exercise</h4>
            <p>Translate the word: {word}</p>
            <input type='text' value={userTranslation} onChange={handleInputChange} />
            <button onClick={checkAnswer}>Check Answer</button>
            {isCorrect !== null && (
                <p>{isCorrect ? 'Correct!' : 'Sorry, try again.'}</p>
            )}
        </div>
    );
};

export default VocabularyExercise;
