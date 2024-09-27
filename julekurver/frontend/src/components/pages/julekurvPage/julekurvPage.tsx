import { JulekurvPageModel } from '../../../models/julekurvPage/JulekurvPageModel';
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import DefaultPageContainer from '../../layout/defaultPageContainer/DefaultPageContainer';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../shared/breadcrumb/breadcrumb';

export type JulekurvPageProps = {
    page_type?: string;
}

export const JulekurvPage : FunctionComponent<JulekurvPageProps> = (props) => {
    const standard_page_api_path = "/api/julekurv-page-api/";
    const emptyJulekurvPage: JulekurvPageModel = { name: '', about: '', image_julekurv_url: '', url: '' };
    
    const { name } = useParams();
    
    const [ julekurvPage, setJulekurvPage ] = useState(emptyJulekurvPage); 
    const [ initialLoading, setnitialLoading ] = useState(true);
    
    useEffect(() => {
        const api_path = `${standard_page_api_path}?julekurv_name=${name}`      
        axios.get(api_path).then(x => {
            if (x.data) {
                const response = JSON.parse(x.data);
                const julekurvPage: JulekurvPageModel = {
                    name: response?.name,
                    about: response?.about,
                    image_julekurv_url: response?.image_julekurv,
                    url: response?.about ?? '',
                };
                
                setJulekurvPage(julekurvPage);
            }
        });
        
        setnitialLoading(true);
    }, []);

    console.log(name, julekurvPage);
    
    return (
        <>
        { julekurvPage && initialLoading && name &&
            <DefaultPageContainer 
                pageClassName='standard-page' 
                heading={julekurvPage.name} 
                description=''>
                <Breadcrumb linkItems={[ 
                    { linkText: 'Forside', href: '/'},
                    { linkText: 'Julekurver', href: '/julekurver'},
                    { linkText: julekurvPage.name, href: name}
                ]} />
                <h1>{julekurvPage.name}</h1>
                <img height={400} src={julekurvPage.image_julekurv_url.replace('frontend', '')} />
                <div dangerouslySetInnerHTML={{__html: julekurvPage.about}} />

            </DefaultPageContainer>
        }
        </>
    ) 
};

export default JulekurvPage;