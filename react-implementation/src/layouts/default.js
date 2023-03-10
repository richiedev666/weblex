import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

export default function Default({ children }) {
  return (
    <div className="main-wrapper">
      <HeaderComponent />

      <main>{children}</main>

      <FooterComponent />
    </div>
  );
}
