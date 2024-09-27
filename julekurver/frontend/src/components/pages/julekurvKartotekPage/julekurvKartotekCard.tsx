import './julekurvKartotekCard.scss';
import { JulekurvPageModel } from '../../../models/julekurvPage/julekurvPageModel';

type JulekurvKartotekCardProps = {
  julekurv: JulekurvPageModel;
};

export default function JulekurvKartotekCard({ julekurv }: JulekurvKartotekCardProps) {
  const { url, image_julekurv_url, name } = julekurv;

  return (
    <a href={url} key={name}>
      <div className="section">
        <img width={160} alt={name} src={image_julekurv_url.replace('frontend', '')} />
        <i>{name}</i>
      </div>
    </a>
  );
}
