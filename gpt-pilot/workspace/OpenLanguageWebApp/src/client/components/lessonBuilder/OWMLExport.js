import React from 'react';

const OWMLExport = ({ lessonData }) => {
    const exportToOWML = () => {
        const owmlContent = JSON.stringify(lessonData); // This is a simplified example; should be converted to proper OWML format
        const blob = new Blob([owmlContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${lessonData.title.replace(/ /g, '_')}.owml`;
        link.click();
    };

    return lessonData.title && lessonData.exercises.length > 0 ? (
        <button onClick={exportToOWML}>
            Export to OWML
        </button>
    ) : (
        <p>Create a lesson with a title and at least one exercise to export.</p>
    );
};

export default OWMLExport;