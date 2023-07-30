import Button from '@/components/Button/Button';
import styles from './category.module.css';
import Image from 'next/image';
import { items } from './data';

const getData = (cat) => {
  const data = items[cat];
  
  if (data) {
    return data;
  }
  
  return 'Not Found';
}

export const generateMetadata = async ({ params }) => {
  return {
    title: `Portfolio/${params.category}`,
    description: `Portfolio - ${params.category} Category`,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{params.category}</h1>
      {
        data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button url="#" text="See More" />
            </div>
            <div className={styles.imgContainer}>
              <Image src={item.image} alt={item.title} fill={true} className={styles.img} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Category;