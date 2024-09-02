import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";

type Data = { cardImageURL: string; profileTitle: string; description: string };

interface ShareCardProps {
  data: Data;
}

const ShareCard: NextPage<ShareCardProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.profileTitle}</title>
        <meta name="description" content={data.description} />
        <meta property="og:image" content={data.cardImageURL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300px" />
        <meta property="og:image:height" content="300px" />
      </Head>
    </>
  );
};

export const getServerSideProps = async () => {
  let data = null;

  try {
    const profilesData = await axios.post(
      "https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b"
    );
    data = profilesData.data?.result[0] ?? null;
  } catch (error) {
    console.log("error", error);
  }

  return {
    props: {
      data: data,
    },
  };
};

export default ShareCard;
