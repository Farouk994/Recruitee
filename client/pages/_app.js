import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { UserProvider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "@popperjs/core";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
   return (
      <UserProvider>
         <Head></Head>
         <Navbar />
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />

         <Component {...pageProps} />
         {/* <Footer/> */}
      </UserProvider>
   );
}

export default MyApp;
