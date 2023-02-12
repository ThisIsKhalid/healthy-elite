import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Departments from "@/components/Home/Departments";   
import OurProduct from "@/components/Home/OurProduct";
import Services from "@/components/Home/Services";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Healthy Elite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <OurProduct products={products}/>
        <Departments />

        <Services />
        <Footer />

      </main>
    </>
  );
}

export async function getStaticProps() {
  const {products} = await import('/data/productData.json'); 

  return {
      props: {
        products: products
      }
  }
}

