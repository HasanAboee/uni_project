import Background from "../components/Layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Background>
      <Component {...pageProps} />
    </Background>
  );
}

export default MyApp;
