import Banner from 'components/banner/Banner';
import image from 'assets/eric-muhr-P_XxsdVgtpQ-unsplash_1.jpg';
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
  const background = `url("${image}") left center/cover no-repeat`;
  console.log(background, typeof background);
  return (
    <main className={styles.home}>
      <Banner
        background={background}
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
