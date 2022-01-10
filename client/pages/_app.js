import "../styles/globals.css";
import "tailwindcss/tailwind.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "@material-tailwind/react/tailwind.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "@popperjs/core"
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {
   return (
      <>
      <Head>
     
      </Head>
         <Navbar />
         <Component {...pageProps} />
         {/* <Footer/> */}
      </>
   );
}

export default MyApp;
