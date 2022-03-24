import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    })
    return (
        <div className="content">
            { children }
        </div>
    );
}
 
export default Layout;