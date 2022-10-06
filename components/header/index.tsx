import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link rel="stylesheet" href="/" className="" >Home</Link></li>
                <li className={styles.item}><Link rel="stylesheet" href="/blog" className="" >Blog</Link></li>
                <li className={styles.item}><Link rel="stylesheet" href="/users/users" className="" >Users</Link></li>
            </ul>
    </header>
    )
}