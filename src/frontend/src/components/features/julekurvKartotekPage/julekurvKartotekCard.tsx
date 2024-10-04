import { Julekurv } from '@/app/[lang]/julekurver/[julekurv]/page';
import './julekurvKartotekCard.css';

type JulekurvKartotekCardProps = {
  julekurv: Julekurv;
};

export default function JulekurvKartotekCard({ julekurv }: JulekurvKartotekCardProps) {
  const { url, imageJulekurvUrl, name } = julekurv;

  return (
    <a href={`julekurver/${url}`} key={name}>
      <div className="section">
        <img width={160} alt={name} src={`http://127.0.0.1:8000/media/${imageJulekurvUrl}`} />
        <i>{name}</i>
      </div>
    </a>
  );
}
