import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Freshvo</title>
                <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/warung-customer.appspot.com/o/freshvo-favicon-300x300.png?alt=media&token=059cc4ba-a08e-47aa-b3f2-e7686126343b" />
            </Head>
            <div style={{overflowY: "auto"}}>{children}</div>
        </>
    );
};

export default Layout;
