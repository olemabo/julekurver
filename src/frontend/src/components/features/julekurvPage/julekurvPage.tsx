import { Julekurv } from '@/app/[lang]/julekurver/[julekurv]/page';
import Breadcrumb from '@/components/shared/ui/breadcrumb/breadcrumb';
import './julekurv.css';
import Button from '@/components/shared/ui/button/button';

export type JulekurvPageProps = {
  julekurv: Julekurv;
};

export default function JulekurvPage({ 
    julekurv
 }: JulekurvPageProps) {

    const imageUrl = `http://127.0.0.1:8000/media/${julekurv?.imageJulekurvUrl}`;
    const imageMalUrl = `http://127.0.0.1:8000/media/${julekurv?.imageJulekurvMalUrl}`;

    
    return (
        <>
        {julekurv && (
            <div className='default-page-container julekurv-page'>
                <Breadcrumb
                    linkItems={[
                    { linkText: 'Forside', href: '/' },
                    { linkText: 'Julekurver', href: '/julekurver' },
                    { linkText: julekurv.name, href: `/julekurver/${julekurv.url}` },
                    ]}
                />
                <div style={{ display: 'flex', columnGap: '48px' }}>
                    <div>
                        <h1>{julekurv?.name}</h1>
                        <p dangerouslySetInnerHTML={{ __html: julekurv?.about }} />
                        <p>
                            <b>Nivå: </b> Vanskelig
                        </p>
                        <p>
                            <b>Tidsbruk: </b> 30 min
                        </p>
                        <p>
                            <b>Kilde: </b><a href='www.domstol.no'>johansjulehjerte</a>
                        </p>
                    </div>
                    <div>
                        <img height={300} src={imageUrl} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
                    <h2>Mal</h2>
                    <div>
                        <img height={300} src={imageMalUrl} />
                    </div>
                    <Button 
                        label='Last ned mal'
                        href={imageMalUrl} 
                    />
                </div>
                <div>
                    <h2>Hvordan lage kurv</h2>
                </div>
                <div>
                    <h2>Ligende kurver</h2>
                </div>
            </div>
        )}
        </>
  );
}
