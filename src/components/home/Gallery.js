import styles from "../../styles/components/home/gallery.module.scss";
import Card from "./Card";
import data from "../../data/locations.json";

const Gallery = () => {
  return (
    <section className={styles.section}>
      {data.map(({ title, description, cover, id }) => (
        <Card key={id} title={title} cover={cover} alt={description} />
      ))}
    </section>
  );
};

export default Gallery;
