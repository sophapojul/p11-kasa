import Card from 'components/card/Card';
import { ILodging } from 'interfaces';
import { Link, useLoaderData } from 'react-router-dom';
import styles from './Gallery.module.scss';

function Gallery() {
  const data = useLoaderData() as ILodging[];
  return (
    <section>
      <ul className={styles.ul}>
        {data?.map(({ id, cover, title }) => (
          <li key={id}>
            <Link to={id}>
              <Card title={title} cover={cover} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
