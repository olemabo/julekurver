import React from 'react';
import './julekurvKartotekCard.scss';
import { JulekurvPageModel } from '../../../models/julekurvPage/JulekurvPageModel';


type JulekurvKartotekCardProps = {
    julekurv: JulekurvPageModel;
};

const JulekurvKartotekCard: React.FunctionComponent<JulekurvKartotekCardProps> = ({
    julekurv
}) => {
    const { url, image_julekurv_url, name } = julekurv;

    return (
        <a href={url} key={name}>
            <div className='section'>
                <img width={160} alt={name} src={image_julekurv_url.replace('frontend', '')} />
                <i>{name}</i>
            </div>
        </a>
    );
};

export default JulekurvKartotekCard;