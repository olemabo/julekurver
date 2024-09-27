import { useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumb from '../../shared/breadcrumb/breadcrumb';
import DefaultPageContainer from '../../layout/defaultPageContainer/defaultPageContainer';
import { StandardPageModel } from '../../../models/standardPage/standardPageModel';

export type StandardPageProps = {
  pageType?: string;
};

export default function StandardPage({ pageType }: StandardPageProps) {
  const standard_page_api_path = '/api/standard-page-api/';
  const emptyStandardPage: StandardPageModel = { title: '', content: '' };

  const [standardPage, setStandardPage] = useState(emptyStandardPage);
  const [initialLoading, setnitialLoading] = useState(true);

  useEffect(() => {
    const api_path = `${standard_page_api_path}?page_type=${pageType}`;
    axios.get(api_path).then((x) => {
      if (x.data) {
        const response = JSON.parse(x.data);
        const standardPage: StandardPageModel = {
          title: response?.title,
          content: response?.content,
        };

        setStandardPage(standardPage);
      }
    });

    setnitialLoading(true);
  }, [pageType]);

  return (
    <>
      {standardPage && initialLoading && (
        <DefaultPageContainer
          pageClassName="standard-page"
          heading={standardPage.title}
          description=""
          // description={ standardPage?.description}
        >
          <Breadcrumb
            linkItems={[
              { linkText: 'Forside', href: '/' },
              { linkText: 'Om siden', href: '/om-siden' },
            ]}
          />
          <h1>{standardPage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: standardPage.content }} />
        </DefaultPageContainer>
      )}
    </>
  );
}
