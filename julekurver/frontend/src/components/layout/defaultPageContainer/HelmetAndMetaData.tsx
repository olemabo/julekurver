import { Helmet } from 'react-helmet';
import React from 'react';

type HelmetAndMetaDataProps = {
    description: string;
    heading: string;
}

export const HelmetAndMetaData : React.FunctionComponent<HelmetAndMetaDataProps> = ({heading, description}) => {
    return <Helmet key='page-helmet'>
        <title>{heading}</title>
        <meta name='og:title' content={ heading }/>
        <meta name='og:description' content={description} />
        <meta name='description' content={description} />
    </Helmet>
}

export default HelmetAndMetaData;