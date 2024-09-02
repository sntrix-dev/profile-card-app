import Image from "next/image";
import { FC } from "react";

export interface HeroProps {
  firstname: string;
  lastname: string;
  dpURL: string;
  title: string;
  city: string;
  country: string;
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
}) => {
  return (
    <div className="relative z-[1] space-y-10">
      <div className="">
        <div className="p-0.5 bg-white w-max rounded-full mb-2">
          <Image
            src={dpURL}
            alt={firstname}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-white text-2xl font-medium">
            {firstname} {lastname}
          </h3>
        </div>
        <div>
          <h4 className="text-white capitalize">{title}</h4>
        </div>
        <div>
          {" "}
          <h4 className="text-white">
            {city}, {country}
          </h4>
        </div>
      </div>
      <div onClick={onProfileCardClick} className="w-max">
        <Image src="/profile-card.png" alt="" width={100} height={100} />
      </div>
    </div>
  );
};

export default Hero;
