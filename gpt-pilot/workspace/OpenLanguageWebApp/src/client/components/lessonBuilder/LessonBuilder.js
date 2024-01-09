import React, { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import LessonPreview from './LessonPreview';
import OWMLExport from './OWMLExport';

const LessonBuilder = () => {
    const [lessonData, setLessonData] = useState({
        title: '',
        description: '',
        exercises: []
    });

    const addToLesson = (exercise) => {
        setLessonData(prevData => ({
            ...prevData,
            exercises: [...prevData.exercises, exercise]
        }));
    };

    return (
        <div>
            <h2>Lesson Builder</h2>
            <div>
                <label>Title:
                    <input 
                        type='text' 
                        value={lessonData.title} 
                        onChange={e => setLessonData({ ...lessonData, title: e.target.value })} 
                    />
                </label>
                <label>Description:
                    <textarea 
                        value={lessonData.description} 
                        onChange={e => setLessonData({ ...lessonData, description: e.target.value })} 
                    />
                </label>
            </div>
            <ExerciseForm onAddExercise={addToLesson} />
            <LessonPreview lessonData={lessonData} />
            <OWMLExport lessonData={lessonData} />
        </div>
    );
};

export default LessonBuilder;