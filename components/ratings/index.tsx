import { FC } from "react";
import { StarIcon } from "../Icons";

interface RatingProps {
  number: number;
  text: string;
}

const Ratings: FC = () => {
  return (
    <div className="relative z-[1] pt-[23px]">
      <div className="absolute left-[calc(50%_-_23px)] -top-0">
        <StarIcon />
      </div>
      <div className="w-full bg-white/20 shadow p-4 rounded-2xl justify-center text-white ">
        <h4 className="text-white font-medium text-lg mb-4">Ratings</h4>
        <div className="space-y-4">
          <Rating
            number={57}
            text="Has ethical code of conduct and is safe to do bussines with"
          />
          <hr />
          <Rating number={27} text="Met In real life/Video call" />
        </div>
      </div>
    </div>
  );
};

const Rating: FC<RatingProps> = ({ number, text }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <h4 className="text-xl font-medium">{number}</h4>
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default Ratings;
