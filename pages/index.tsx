import type {NextPage} from "next";
import {useRouter} from "next/router";

type UrlData = {
   id: number;
   destinationUrl: string;
}

const urlList: UrlData[] = [
   {id: 0, destinationUrl: "https://github.com/YukiYuigishi/MEISHI/blob/master/PCB/MEISHI2022/README.md"}
]
const Home: NextPage = () => {
   const router = useRouter();
   const {id} = router.query;
   if (typeof id === "string") {

      const urlId: number = parseInt(id);
      const redirect = urlList.find((data: UrlData) => data.id === urlId);
      if (redirect === undefined) {
         return <h1>Cannot find redirect destination</h1>
      }

      router.replace(redirect.destinationUrl);
      return <h1>Redirect to {redirect.destinationUrl}</h1>;
   }

   return <h1>Querry Error</h1>

};
export default Home;
