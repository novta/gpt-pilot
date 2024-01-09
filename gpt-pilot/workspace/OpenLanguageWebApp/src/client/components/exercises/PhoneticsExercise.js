import React from 'react';

const PhoneticsExercise = ({ pairs }) => {
    return (
        <div>
            <h4>Phonetics Exercise</h4>
            <ul>
                {pairs.map((pair, index) => (
                    <li key={index}>{pair[0]} - {pair[1]}</li>
                ))}
            </ul>
            {/* In a real component, you would include interactivity to practice the sounds */}
        </div>
    );
};

export default PhoneticsExercise;
