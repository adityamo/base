
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

import Image from 'next/image';

export default function Home() {
  return(
   
      <Layout pageTitle = "HomePage">
        <Image src="/img/user.png"width={200} height={200} alt="profile" / >
        <h1 className={styles['title-homepage']}>Welcome</h1>
      </Layout>
   
  );
}
