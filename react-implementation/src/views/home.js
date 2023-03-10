import DefaultLayout from "../layouts/default.js";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="home__wrapper">
        <div className="container">
          <div className="home">hello world!</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
