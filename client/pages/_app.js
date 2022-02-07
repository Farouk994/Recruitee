import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { UserProvider } from "../context/AuthProvider";
import { UserContext } from "../context/AuthProvider";

function MyApp({ Component, pageProps }) {
   return (
      <UserProvider>
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
         <Footer />
      </UserProvider>
   );
}

export default MyApp;
