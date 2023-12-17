import React from 'react';
import TimelineCard from './TimelineCard';
import '../../styles/about.css';

const Timeline = () => {
    const workExperience = [
        {
            title: "Monash Connect (student services)",
            date: "2021-2024",
            description: "Description of job",
            imgpath: "..../media/"
        },
        {
            title: "Science for Preschoolers",
            date: "2020-2021",
            description: "Description of job",
            imgpath: "..../media/"
        },
        {
            title: "Coles Supermarkets",
            date: "2019-2020",
            description: "Description of job",
            imgpath: "..../media/"
        }
    ];

    return (
        <>
            {workExperience.map((experience, index) => (
                <div className='timeline-point'>
                    <h1>{experience.date}</h1>
                    <TimelineCard
                        key={index}
                        title={experience.title}
                        date={experience.date}
                        description={experience.description}
                    />
                </div>
            ))}
        </>
    );
};

export default Timeline;
