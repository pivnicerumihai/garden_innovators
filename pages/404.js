import Link from 'next/link';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <Header />
            <main className="flex flex-col items-center justify-center py-2 px-4 sm:px-8 lg:px-16 min-h-screen">
                <div className="mt-40 w-full sm:w-3/4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-accent">404 - Page Not Found</h1>
                    <p className="text-lg text-accent p-10">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    
                    <button className="px-4 py-2 border-2 border-primary text-accent rounded hover:bg-primary hover:text-white transition-colors duration-300">
                        <Link href="/">Go back home</Link>
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}
