import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

interface IErrorPage {
  message: string;
}
function ErrorPage() {
  const error = useRouteError() as IErrorPage;
  return (
    <>
      <Header />
      <div className={styles.div}>
        <h1>{error.message}</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
      </div>
      <Footer />
    </>
  );
}
export default ErrorPage;
