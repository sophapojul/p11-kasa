import Banner from 'components/banner/Banner';
import image from 'assets/kalen-emsley-Bkci_8qcdvQ-unsplash_1.jpg';
import AboutContent from 'components/aboutContent/AboutContent';
import styles from './About.module.scss';

function About() {
  const background = `url("${image}") center/cover`;
  return (
    <main className={styles.about}>
      <Banner background={background} />
      <AboutContent />
    </main>
  );
}
export default About;
