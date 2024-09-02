import Image from "next/image";
import { FC } from "react";
import { BriefcaseIcon, LocationIcon, VerifiedIcon } from "../Icons";
import ProfileCard from "../profileCard";

export interface HeroProps {
  firstname: string;
  lastname: string;
  dpURL: string;
  title: string;
  city: string;
  country: string;
  profileBannerImageURL: string;
  onProfileCardClick: () => void;
}

const Hero: FC<HeroProps> = ({
  city,
  country,
  dpURL,
  firstname,
  lastname,
  title,
  onProfileCardClick,
  profileBannerImageURL,
}) => {
  return (
    <div className="relative z-[1] space-y-10">
      <div className="">
        <div className="p-0.5 bg-white w-max rounded-full mb-2 relative">
          <Image
            src={dpURL}
            alt={firstname}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-white text-2xl font-medium">
            {firstname} {lastname}
          </h3>
          <div className="">
            <VerifiedIcon size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <BriefcaseIcon />
          <h4 className="text-white capitalize">{title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[25px]">
            <LocationIcon />
          </div>
          <h4 className="text-white">
            {city}, {country}
          </h4>
        </div>
      </div>
      <div onClick={onProfileCardClick} className="cursor-pointer">
        {/* <Image src="/profile-card.png" alt="" width={100} height={100} /> */}
        <ProfileCard
          isCard
          city={city}
          country={country}
          dpURL={dpURL}
          firstname={firstname}
          lastname={lastname}
          title={title}
          profileBannerImageURL={profileBannerImageURL}
        />
      </div>
    </div>
  );
};

export default Hero;
