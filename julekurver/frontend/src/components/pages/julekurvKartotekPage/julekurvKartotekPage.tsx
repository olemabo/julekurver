import { JulekurvPageModel } from '../../../models/julekurvPage/JulekurvPageModel';
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import DefaultPageContainer from '../../layout/defaultPageContainer/DefaultPageContainer';
import Breadcrumb from '../../shared/breadcrumb/breadcrumb';
import './julekurvKartotekCard.scss';
import JulekurvKartotekCard from './julekurvKartotekCard';
import Search from '../../shared/search/search';

export type JulekurvKartotekPageProps = {
    page_type?: string;
}

export const JulekurvKartotekPage: FunctionComponent<JulekurvKartotekPageProps> = (props) => {
    const standard_page_api_path = "/api/julekurver-page-api/";
    const emptyJulekurver: JulekurvPageModel[] = [{ name: '', about: '', image_julekurv_url: '', url: '' }];

    const [julekurver, setJulekurver] = useState(emptyJulekurver);
    const [initialLoading, setnitialLoading] = useState(false);

    useEffect(() => {
        const api_path = `${standard_page_api_path}`
        axios.get(api_path).then(({ data }) => {
            const output = data?.map((julekurv: string) => {
                const response = JSON.parse(julekurv);
                return {
                    name: response?.name ?? '',
                    about: response?.about ?? '',
                    url: response?.url ?? '',
                    image_julekurv_url: response?.image_julekurv ?? '',
                };
            }) || [];

            setJulekurver(output);
            setnitialLoading(true);
        });

    }, []);

    console.log(julekurver)

    return (
        <>
            {julekurver && julekurver.length > 0 && julekurver[0].name && initialLoading &&
                <DefaultPageContainer
                    pageClassName='standard-page'
                    heading={"Julekurver"}
                    description=''>
                    <Breadcrumb linkItems={[
                        { linkText: 'Forside', href: '/' },
                        { linkText: 'Julekurver', href: '/julekurver' },
                    ]} />
                    <div>
                        <h1>{"Julekurver"}</h1>
                        <div>Søk blant alle våre julekurver ved hjelp av søkefunksjonaliteten vår.</div>
                        {/* <div dangerouslySetInnerHTML={{__html: julekurvPage.about}} /> */}
                        <div>
                            <Search />
                            <div className='julekurv-kartotek-section'>
                                {julekurver.map(julekurv => (
                                    <JulekurvKartotekCard
                                        julekurv={julekurv}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </DefaultPageContainer>
            }
        </>
    )
};

export default JulekurvKartotekPage;