import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import BookDoctor from "@/components/Home/BookDoctor";
import Departments from "@/components/Home/Departments";   
import OurProduct from "@/components/Home/OurProduct";
import SelectDoctor from "@/components/Home/SelectDoctor";
import EmergencyBooking from "@/components/Home/EmergencyBooking";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home({products,doctors}) {
  return (
    <>
      <Head>
        <title>Healthy Elite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Header />
        <Hero></Hero>
        <EmergencyBooking></EmergencyBooking>
        
        <OurProduct products={products} />
        <Departments />

        <Services /> */}
        <SelectDoctor />
        <BookDoctor doctors={doctors} />
        {/* <Testimonial />
        <Footer /> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const {products} = await import('/data/productData.json'); 
  const {doctors} = await import('/data/doctor.json');

  return {
      props: {
        products: products,
        doctors: doctors
      }
  }
}

