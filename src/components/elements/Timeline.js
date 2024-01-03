import React from 'react';
import TimelineCard from './TimelineCard';
import '../../styles/about.css';
import mu from '../../media/mu.png';

const Timeline = () => {
    const workExperience = [
        {
            title: "Monash Connect (student services)",
            date: "2021-2024",
            description: "Description of job",
            img: mu
        },
        {
            title: "Science for Preschoolers",
            date: "2020-2021",
            description: "Description of job",
            mg: mu
        },
        {
            title: "Coles Supermarkets",
            date: "2019-2020",
            description: "Description of job",
            mg: mu
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
                        img={experience.img}
                    />
                </div>
            ))}
        </>
    );
};

export default Timeline;
