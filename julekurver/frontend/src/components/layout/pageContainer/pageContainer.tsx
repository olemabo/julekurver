// import { useSelector } from 'react-redux';
import React from 'react';
import HelmetAndMetaData from './helmetAndMetaData';

type PageContainerProps = {
  heading: string;
  description: string;
  pageClassName?: string;
  children?: React.ReactNode;
};

export default function PageContainer({
  heading,
  description,
  pageClassName = '',
  children,
}: PageContainerProps) {
  // const langaugeCodeFromRedux = useSelector((state: any) => state?.language_code);
  const langaugeCodeFromRedux = 'no';
  document.documentElement.lang = langaugeCodeFromRedux;

  return (
    <div
      className={`${pageClassName} default-page-container`}
      key={`${heading}-container`}
      lang={langaugeCodeFromRedux}
    >
      <HelmetAndMetaData description={description} heading={heading} />
      {children}
    </div>
  );
};