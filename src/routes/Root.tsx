import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
