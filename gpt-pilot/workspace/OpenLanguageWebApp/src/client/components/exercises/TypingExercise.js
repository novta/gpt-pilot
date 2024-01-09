import React, { useState } from 'react';

const TypingExercise = ({ text }) => {
    const [userInput, setUserInput] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setIsComplete(e.target.value === text);
    };

    return (
        <div>
            <h4>Typing Exercise</h4>
            <textarea
                value={userInput}
                onChange={handleInputChange}
                disabled={isComplete}
            />
            {isComplete && <p>Well done!</p>}
        </div>
    );
};

export default TypingExercise;
