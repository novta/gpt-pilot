import React from 'react';

const LessonPreview = ({ lessonData }) => {
    return (
        <div>
            <h3>Lesson Preview</h3>
            <h4>{lessonData.title}</h4>
            <p>{lessonData.description}</p>
            {lessonData.exercises.map((exercise, index) => (
                <div key={index}><p>{exercise}</p></div>
            ))}
        </div>
    );
};

export default LessonPreview;