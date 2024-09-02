import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CommentProps {
  profilePic: string;
  name: string;
  comment: string;
  time: string;
  likes: number;
  replies: Omit<CommentProps, "replies">[];
}

const Comments: FC = () => {
  return (
    <div className="relative z-[1] w-full bg-white/20 shadow p-4 rounded-2xl justify-center text-white">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-white font-medium text-lg">Comments</h4>
        <Link href="/" className="text-white font-medium text-lg">
          See all
        </Link>
      </div>
      <div className="space-y-4">
        <Comment
          likes={271}
          time="1s"
          profilePic="/profile-1.png"
          comment="See you in the next event @roger vaccaro"
          name="Gwen Stacy"
          replies={[]}
        />
        <Comment
          likes={271}
          time="1s"
          profilePic="/profile-2.png"
          comment="Never judge a book by its cover"
          name="Gwen Stacy"
          replies={[]}
        />
      </div>
    </div>
  );
};

const Comment: FC<CommentProps> = ({
  comment,
  likes,
  name,
  profilePic,
  replies,
  time,
}) => {
  return (
    <div className="flex gap-4">
      <div className="">
        <Image
          src={profilePic}
          alt=""
          width={45}
          height={45}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-sm">
          <strong>{name}</strong>{" "}
          <span className="text-white/60">{comment}</span>
        </h4>
        <div className="text-sm text-white/60 flex items-center gap-2 mt-2">
          <h3>{time}</h3>
          <h3>{likes} likes</h3>
          <h3>Reply</h3>
        </div>
      </div>
    </div>
  );
};

export default Comments;
