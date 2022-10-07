
import Layout from "../components/layout";
import styles from "../styles/Blog.module.css";


export default function Blog(props){
    const {dataBlog} = props;
   return (
    <Layout pageTitle="Blog">
       {dataBlog.map(blog => {
            return(
                <div key={blog.id} className={styles.card}>
                    <p>{blog.title}</p>
                    <p>{blog.body}</p>
                </div>

            )
                            
       })}
    </Layout>
        
   );

  
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        }
    }
}