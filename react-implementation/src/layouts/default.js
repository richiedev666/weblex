import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

export default function Default({ children }) {
  return (
    <>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </>
  );
}
