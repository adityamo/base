
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Head from 'next/head';

export default function Home() {
  return(
   
      <Layout pageTitle = "HomePage">
        <h1 className={styles['title-homepage']}>Welcome</h1>
      </Layout>

  
   
  );
}
