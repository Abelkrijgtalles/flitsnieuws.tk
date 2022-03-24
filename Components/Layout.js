import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
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