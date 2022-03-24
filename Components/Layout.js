import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        router.push('hhttps://youtu.be/a3Z7zEc7AXQ')
    })
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
                <title>Het nieuwste nieuws op FlitsNieuws!</title>
            </Head>
            <div className="content">
                {children}
            </div>
        </>
    );
}

export default Layout;