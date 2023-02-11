import Banner from 'components/banner/Banner';
import backgroundImage from 'assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import Gallery from 'components/gallery/Gallery';
import { useNavigation } from 'react-router-dom';
import { getAllLodgings } from 'services/Api';
import styles from './Home.module.scss';

export function loader() {
  return getAllLodgings();
}

function Home() {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <h1> Loading...!</h1>;
  }
  return (
    <main className={styles.home}>
      <Banner
        backgroundImage={backgroundImage}
        title={
          <>
            <span>Chez vous,&nbsp;</span>partout ailleurs
          </>
        }
      />
      <Gallery />
    </main>
  );
}
export default Home;
