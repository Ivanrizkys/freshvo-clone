import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Freshvo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>{children}</div>
        </>
    );
};

export default Layout;
