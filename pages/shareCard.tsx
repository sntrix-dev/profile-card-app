import Header from "@/components/header";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { Inter, Raleway } from "next/font/google";
import ProfileCard from "@/components/profileCard";

type Data = { cardImageURL: string; profileTitle: string; description: string };

interface ShareCardProps {
  metaData: Data;
  data: any;
}

const raleway = Raleway({ subsets: ["latin"] });

const ShareCard: NextPage<ShareCardProps> = ({ data, metaData }) => {
  return (
    <>
      <Head>
        <title>{metaData.profileTitle}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:image" content={metaData.cardImageURL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300px" />
        <meta property="og:image:height" content="300px" />
      </Head>
      <main
        style={{
          ...raleway.style,
          backgroundImage: `url('${data.profileDesignInfo.profileBannerImageURL}')`,
        }}
        className="bg-cover bg-no-repeat bg-center mx-auto relative z-0 min-h-screen"
      >
        <div className="bg-black/30 absolute w-full h-full z-0" />
        <Header />
        <ProfileCard
          isPage
          city={data.location.city}
          country={data.location.country}
          dpURL={data.dpURL}
          firstname={data.firstname}
          lastname={data.lastname}
          title={data.title[0].value}
          profileBannerImageURL={data.profileDesignInfo.profileBannerImageURL}
        />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  let data = null;
  let metaData = null;

  try {
    const profilesMetaData = await axios.post(
      "https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b"
    );
    const profilesData = await axios.post(
      "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
    );
    data = profilesData.data?.result[0] ?? null;
    metaData = profilesMetaData.data?.result[0] ?? null;
  } catch (error) {
    console.log("error", error);
  }

  return {
    props: {
      data,
      metaData,
    },
  };
};

export default ShareCard;
