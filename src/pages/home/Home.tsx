import Banner from 'components/banner/Banner';
import backgroundImage from 'assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';

function Home() {
  return (
    <Banner
      backgroundImage={backgroundImage}
      title={
        <>
          <span>Chez vous,&nbsp;</span>partout ailleurs
        </>
      }
    />
  );
}
export default Home;
