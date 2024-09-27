import { Helmet } from 'react-helmet';

type HelmetAndMetaDataProps = {
  description: string;
  heading: string;
};

export default function HelmetAndMetaData({ description, heading }: HelmetAndMetaDataProps) {
  return (
    <Helmet key="page-helmet">
      <title>{heading}</title>
      <meta name="og:title" content={heading} />
      <meta name="og:description" content={description} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
