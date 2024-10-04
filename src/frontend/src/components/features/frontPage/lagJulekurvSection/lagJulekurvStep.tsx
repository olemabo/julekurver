import React from 'react';

type JulekurvStepProps = {
    imageUrl: string;
    description: string;
    height?: number;
};

export default function JulekurvStep({
    imageUrl,
    description,
    height=280
}: JulekurvStepProps) {
    return (
        <div className='julekurv-step'>
            <img height={height} src={imageUrl} alt={description} />
            <p>{description}</p>
        </div>
    );
};