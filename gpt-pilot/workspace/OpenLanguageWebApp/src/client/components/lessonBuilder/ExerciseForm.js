import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
    const [exercise, setExercise] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddExercise(exercise);
        setExercise('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Exercise Text</label>
                <textarea 
                    value={exercise} 
                    onChange={(e) => setExercise(e.target.value)}
                    required
                />
            </div>
            <input type='submit' value='Add Exercise' />
        </form>
    );
};

export default ExerciseForm;