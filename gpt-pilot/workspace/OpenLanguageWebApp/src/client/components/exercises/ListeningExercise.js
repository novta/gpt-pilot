import React, { useState } from 'react';

const ListeningExercise = ({ audioUrl, correctAnswer }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const checkAnswer = () => {
        setIsCorrect(userAnswer.toLowerCase() === correctAnswer.toLowerCase());
    };

    return (
        <div>
            <h4>Listening Exercise</h4>
            <audio controls src={audioUrl}></audio>
            <input type='text' value={userAnswer} onChange={handleInputChange} />
            <button onClick={checkAnswer}>Check Answer</button>
            {isCorrect !== null && (
                <p>{isCorrect ? 'Correct!' : 'Sorry, try again.'}</p>
            )}
        </div>
    );
};

export default ListeningExercise;
