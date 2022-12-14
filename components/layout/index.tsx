import { ReactNode } from 'react';
import Header from "../header";
import Footer from "../footer";
import styles from "./Layout.module.css";
import Head from "next/head";


interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps){
    const {children, pageTitle} = props;
    return (
        <>
            <Head>
                <title className="">Next Js | {''}{pageTitle}</title>
                <meta name="description" content='Website next js basic' />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}