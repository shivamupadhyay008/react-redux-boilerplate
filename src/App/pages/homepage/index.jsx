import { Helmet } from "react-helmet";
import { Counter } from "../../components/counter";
export function HomePage() {
  console.log("sdfdsfds");
  return (
    <>
      <Helmet>
        <title>Home Pages</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Counter />
    </>
  );
}
