import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>id: {id}</h1>;
};

Home.getInitialProps = async ({ res }: NextPageContext) => {
  if (typeof window === undefined) {
    if (res != undefined) {
      res.writeHead(302, { Location: `https://example.com` });
      res.end();
    }
    return {};
  }

  Router.push("https://twitter.com");
  return {};
};

export default Home;
