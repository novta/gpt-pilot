import React from 'react';

const VideoLesson = ({ videoId }) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <h4>Video Lesson</h4>
            <iframe 
                title='YouTube Video Lesson'
                width='560' 
                height='315' 
                src={videoUrl}
                frameBorder='0' 
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoLesson;
