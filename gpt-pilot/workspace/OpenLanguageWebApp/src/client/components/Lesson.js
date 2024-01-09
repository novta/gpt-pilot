import React from 'react';
import ListeningExercise from './exercises/ListeningExercise';
import VideoLesson from './exercises/VideoLesson';
import VocabularyExercise from './exercises/VocabularyExercise';
import SentenceConstruction from './exercises/SentenceConstruction';
import FillInTheBlank from './exercises/FillInTheBlank';
import ConjugationExercise from './exercises/ConjugationExercise';
import TypingExercise from './exercises/TypingExercise';
import ReviewExercise from './exercises/ReviewExercise';
import PhoneticsExercise from './exercises/PhoneticsExercise';

const Lesson = ({ lessonData }) => {
    return (
        <div>
            <h3>{lessonData.title}</h3>
            <p>{lessonData.description}</p>
            {lessonData.exercises.map((exercise, index) => {
                switch (exercise.type) {
                    case 'listening':
                        return <ListeningExercise key={index} {...exercise} />;
                    case 'video':
                        return <VideoLesson key={index} {...exercise} />;
                    case 'vocabulary':
                        return <VocabularyExercise key={index} {...exercise} />;
                    case 'sentenceConstruction':
                        return <SentenceConstruction key={index} {...exercise} />;
                    case 'fillInTheBlank':
                        return <FillInTheBlank key={index} {...exercise} />;
                    case 'conjugation':
                        return <ConjugationExercise key={index} {...exercise} />;
                    case 'typing':
                        return <TypingExercise key={index} {...exercise} />;
                    case 'review':
                        return <ReviewExercise key={index} {...exercise} />;
                    case 'phonetics':
                        return <PhoneticsExercise key={index} {...exercise} />;
                    default:
                        return <div key={index}>Unknown exercise type</div>;
                }
            })}
        </div>
    );
};

export default Lesson;
