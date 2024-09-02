import Image from "next/image";
import { Inter, Raleway } from "next/font/google";
import Hero from "@/components/hero";
import axios from "axios";
import { NextPage } from "next";
import Header from "@/components/header";
import { useState } from "react";
import { ShareIcon } from "@/components/Icons";
import Ratings from "@/components/ratings";
import Comments from "@/components/comments";
import Modal from "@/components/modal";
import ProfileCard from "@/components/profileCard";
import Share from "@/components/share";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
type Data = { cardImageURL: string; profileTitle: string; description: string };
interface HomeProps {
  data: { [key: string]: any };
  metaData: Data;
}

const Home: NextPage<HomeProps> = ({ data, metaData }) => {
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);

  console.log(data);

  return (
    <>
      {metaData && (
        <Head>
          <title>{metaData.profileTitle}</title>
          <meta name="description" content={metaData.description} />
          <meta property="og:image" content={metaData.cardImageURL} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="300px" />
          <meta property="og:image:height" content="300px" />
        </Head>
      )}
      <main
        style={{
          ...raleway.style,
          backgroundImage: `url('${data.profileDesignInfo.profileBannerImageURL}')`,
        }}
        className="bg-cover bg-no-repeat bg-center mx-auto relative z-0"
      >
        <div className="bg-black/30 absolute w-full h-full z-0" />
        <Header />
        <div className="px-6 py-10 space-y-6">
          <Hero
            city={data.location.city}
            country={data.location.country}
            dpURL={data.dpURL}
            firstname={data.firstname}
            lastname={data.lastname}
            title={data.title[0].value}
            onProfileCardClick={() => setIsProfileCardOpen(true)}
            profileBannerImageURL={data.profileDesignInfo.profileBannerImageURL}
          />
          <div className="w-full bg-white/20 shadow flex flex-col items-center p-4 gap-1 rounded-2xl justify-center text-white relative z-[1]">
            <Share
              renderShareBtn={(onClick) => (
                <button onClick={onClick}>
                  <ShareIcon size={36} />
                </button>
              )}
            />
            <h5>Share</h5>
          </div>
          <Ratings />
          <Comments />
        </div>
        <Modal
          open={isProfileCardOpen}
          onClose={() => setIsProfileCardOpen(false)}
        >
          <ProfileCard
            city={data.location.city}
            country={data.location.country}
            dpURL={data.dpURL}
            firstname={data.firstname}
            lastname={data.lastname}
            title={data.title[0].value}
            profileBannerImageURL={data.profileDesignInfo.profileBannerImageURL}
          />
        </Modal>
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

export default Home;
