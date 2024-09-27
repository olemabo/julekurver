import Footer from '../layout/footer/footer';
import { Routes, Route } from 'react-router-dom';
import StandardPage from '../pages/standardPage/standardPage';
import './DefaultLayout.scss';
import JulekurvKartotekPage from '../pages/julekurvKartotekPage/julekurvKartotekPage';
import JulekurvPage from '../pages/julekurvPage/julekurvPage';
import TopMenu from '../layout/topMenu/topMenu';

export const DefaultLayout = () => {
  return (
    <>
      <TopMenu />
      <main>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<h1>Hei</h1>} />
            <Route path="kontakt-oss" element={<StandardPage pageType={'contact'} />} />
            <Route path="om-siden" element={<StandardPage pageType={'about'} />} />
            <Route path="julekurver" element={<JulekurvKartotekPage />} />
            <Route path="julekurver/:name" element={<JulekurvPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};
