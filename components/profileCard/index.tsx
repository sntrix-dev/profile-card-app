import { FC } from "react";
import { HeroProps } from "../hero";
import Image from "next/image";
import { ShareAltIcon, VerifiedIcon } from "../Icons";
import Share from "../share";

interface ProfileCardProps extends Omit<HeroProps, "onProfileCardClick"> {
  profileBannerImageURL: string;
  isPage?: boolean;
  isCard?: boolean;
}

const ProfileCard: FC<ProfileCardProps> = ({
  firstname,
  lastname,
  dpURL,
  title,
  city,
  country,
  profileBannerImageURL,
  isPage = false,
  isCard = false,
}) => {
  return (
    <div
      className={`  relative overflow-hidden  bg-cover bg-no-repeat bg-center rounded-md  ${
        isPage
          ? "w-full h-[calc(100vh_-_56px)]"
          : isCard
          ? "w-[150px] h-max"
          : "border border-[#909090] mt-[5vh] ml-[5%] h-[90vh] w-[90%]"
      }`}
      style={
        !isPage ? { backgroundImage: `url('${profileBannerImageURL}')` } : {}
      }
    >
      {!isPage && (
        <div className="bg-black/30 absolute w-full h-full z-0 top-0 left-0" />
      )}
      {!isCard && (
        <Share
          shareCard
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
      )}
      <div
        className={`relative z-[1] flex flex-col items-center gap-2  px-4 justify-between h-full my-auto ${
          isCard ? "py-4" : isPage ? "py-16" : "py-10"
        }`}
      >
        <div className="p-0.5 bg-[#147BFF] w-max rounded-full mb-2 relative">
          <Image
            src={dpURL}
            alt={firstname}
            width={isCard ? 25 : 116}
            height={isCard ? 25 : 116}
            className="rounded-full"
          />
          <div
            className={`absolute ${
              isCard ? "right-0 bottom-0" : "right-2 bottom-2"
            }`}
          >
            <VerifiedIcon size={isCard ? 10 : 20} />
          </div>
        </div>
        <div>
          <h4
            className={`text-white text-center ${
              isCard ? "text-sm" : "text-3xl"
            } font-bold`}
          >
            {firstname}
          </h4>
          <h4
            className={`text-white text-center  font-semibold ${
              isCard ? "text-xs" : "text-lg"
            }`}
          >
            {lastname}
          </h4>
        </div>
        <div>
          <h4
            className={`text-white text-center font-semibold capitalize ${
              isCard ? "text-xs" : "text-base"
            }`}
          >
            {title}
          </h4>
          <h4
            className={`text-white text-center font-medium ${
              isCard ? "text-xs" : "text-base"
            }`}
          >
            {city}, {country}
          </h4>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <img src="/ico-1.png" className={isCard ? `w-full h-full` : ""} />
          <img src="/ico-2.png" className={isCard ? `w-full h-full` : ""} />
        </div>
        <div className="w-3/4 mx-auto">
          <img src="/ico-3.png" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
