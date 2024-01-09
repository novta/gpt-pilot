import React, { useState } from 'react';

const ReviewExercise = ({ questions }) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(questions.map(() => ''));

    const handleInputChange = (event, index) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = event.target.value;
        setUserAnswers(updatedAnswers);
    };

    const isReviewComplete = activeQuestionIndex >= questions.length;

    return (
        <div>
            <h4>Review Exercise</h4>
            {!isReviewComplete ? (
                <div>
                    <p>{questions[activeQuestionIndex].prompt}</p>
                    <input
                        type="text"
                        value={userAnswers[activeQuestionIndex]}
                        onChange={(event) => handleInputChange(event, activeQuestionIndex)}
                    />
                    <button onClick={() => setActiveQuestionIndex(index => index + 1)}>
                        Next Question
                    </button>
                </div>
            ) : (
                <p>Review complete!</p>
            )}
        </div>
    );
};

export default ReviewExercise;
