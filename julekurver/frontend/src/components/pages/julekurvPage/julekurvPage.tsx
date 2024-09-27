import { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultPageContainer from '../../layout/pageContainer/pageContainer';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../shared/breadcrumb/breadcrumb';
import { Julekurv } from '../../../models/julekurvPage/julekurv';

export type JulekurvPageProps = {
  pageType?: string;
};

export default function JulekurvPage({ pageType }: JulekurvPageProps) {
  const standardPageApiPath = '/api/julekurv-page-api/';
  const emptyJulekurvPage: Julekurv = {
    name: '',
    about: '',
    image_julekurv_url: '',
    url: '',
  };

  console.log(pageType);

  const { name } = useParams();

  const [julekurvPage, setJulekurvPage] = useState(emptyJulekurvPage);
  const [initialLoading, setnitialLoading] = useState(true);

  useEffect(() => {
    const api_path = `${standardPageApiPath}?julekurv_name=${name}`;
    axios.get(api_path).then((x) => {
      if (x.data) {
        const response = JSON.parse(x.data);
        const julekurvPage: Julekurv = {
          name: response?.name,
          about: response?.about,
          image_julekurv_url: response?.image_julekurv,
          url: response?.about ?? '',
        };

        setJulekurvPage(julekurvPage);
      }
    });

    setnitialLoading(true);
  }, [name]);

  console.log(name, julekurvPage);

  return (
    <>
      {julekurvPage && initialLoading && name && (
        <DefaultPageContainer
          pageClassName="standard-page"
          heading={julekurvPage.name}
          description=""
        >
          <Breadcrumb
            linkItems={[
              { linkText: 'Forside', href: '/' },
              { linkText: 'Julekurver', href: '/julekurver' },
              { linkText: julekurvPage.name, href: name },
            ]}
          />
          <h1>{julekurvPage.name}</h1>
          <img height={400} src={julekurvPage.image_julekurv_url.replace('frontend', '')} />
          <div dangerouslySetInnerHTML={{ __html: julekurvPage.about }} />
        </DefaultPageContainer>
      )}
    </>
  );
}
