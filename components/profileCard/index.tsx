import { FC } from "react";
import { HeroProps } from "../hero";
import Image from "next/image";
import { ShareAltIcon } from "../Icons";
import Share from "../share";

interface ProfileCardProps extends Omit<HeroProps, "onProfileCardClick"> {
  onClose: () => void;
  profileBannerImageURL: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  firstname,
  lastname,
  dpURL,
  title,
  city,
  country,
  onClose,
  profileBannerImageURL,
}) => {
  return (
    <div
      className="h-[90vh] w-[90%] mt-[5vh] relative overflow-hidden ml-[5%] bg-cover bg-no-repeat bg-center rounded-md border border-[#909090]"
      style={{ backgroundImage: `url('${profileBannerImageURL}')` }}
    >
      <div className="bg-black/30 absolute w-full h-full z-0 top-0 left-0" />
      <Share
        renderShareBtn={(onClick) => (
          <button
            onClick={onClick}
            className="flex items-center justify-center gap-2 text-white text-sm font-medium absolute z-10 right-4 top-4"
          >
            <ShareAltIcon />
            <span>Share</span>
          </button>
        )}
      />
      <div className="relative z-[1] flex flex-col items-center gap-10 py-10 px-4 h-max my-auto">
        <div className="p-0.5 bg-[#147BFF] w-max rounded-full mb-2">
          <Image
            src={dpURL}
            alt={firstname}
            width={116}
            height={116}
            className="rounded-full"
          />
        </div>
        <div>
          <h4 className="text-white text-center text-3xl font-bold">
            {firstname}
          </h4>
          <h4 className="text-white text-center text-lg font-semibold">
            {lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-white text-center font-semibold capitalize">
            {title}
          </h4>
          <h4 className="text-white text-center font-medium">
            {city}, {country}
          </h4>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <img src="/ico-1.png" />
          <img src="/ico-2.png" />
        </div>
        <div className="w-3/4 mx-auto">
          <img src="/ico-3.png" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
