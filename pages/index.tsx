import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (

    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Welcome Nabil</h1>
      <Image src="/profile.jpg" width={150} height={150} alt="sala" />
      <h2>Project Realease</h2>
      <h3>SALA Logi For Edu && School Agent</h3>
      <img src="/sala.png" width="200" height="200" alt="sala" />

    </Layout>
  );
}
