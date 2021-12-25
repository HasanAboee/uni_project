import { useEffect } from 'react';
import Layout from '../components/Layout/layout'
import "../styles/globals.css";
import DUMMY_DATA from '../dummy_data';

function MyApp({ Component, pageProps }) {

  //when you want to revalidate data in local storage

  useEffect(() => {
    localStorage.removeItem('data')
     localStorage.setItem('data' , JSON.stringify(DUMMY_DATA))
  } , [])

  


  return (
      <Layout>
      <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
