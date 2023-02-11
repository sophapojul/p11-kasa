import Banner from 'components/banner/Banner';
import backgroundImage from 'assets/gustavo-alves-YOXSC4zRcxw-unsplash_1.jpg';
import AboutContent from 'aboutContent/AboutContent';
import styles from './About.module.scss';

function About() {
  return (
    <main className={styles.about}>
      <Banner backgroundImage={backgroundImage} />
      <AboutContent />
    </main>
  );
}
export default About;
