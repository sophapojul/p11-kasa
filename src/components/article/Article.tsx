import { ILodging } from 'interfaces';
import Carousel from 'components/carousel/Carousel';
import Rating from 'components/rating/Rating';
import Dropdown from 'components/dropdown/Dropdown';
import { useLoaderData } from 'react-router-dom';
import Equipments from 'components/Equipments';
import styles from './Article.module.scss';

function Article() {
  const data = useLoaderData() as ILodging;
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = data;
  const { name, picture } = host;
  return (
    <>
      <Carousel slides={pictures} />
      <article className={styles.article}>
        <h2>{title}</h2>
        <figure>
          <img src={picture} alt={name} />
          <figcaption className={styles.figcaption}>{name}</figcaption>
        </figure>
        <p>{location}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Rating rating={rating} />
        <div className={`"description", ${styles.description}`}>
          <Dropdown title="Description">{description}</Dropdown>
        </div>
        <div className={`"equipments", ${styles.equipments}`}>
          <Dropdown title="Équipements">
            <Equipments equipments={equipments} />
          </Dropdown>
        </div>
      </article>
    </>
  );
}
export default Article;
