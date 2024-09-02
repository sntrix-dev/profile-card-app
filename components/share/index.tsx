import axios from "axios";
import { FC, ReactNode } from "react";

interface ShareProps {
  renderShareBtn: (onClick: () => void) => ReactNode;
}

const Share: FC<ShareProps> = ({ renderShareBtn }) => {
  const handleSharing = async () => {
    if (window) {
      const shareDetails = { url: "/shareCard" };
      console.log(document.location.host + "/shareCard");

      await navigator
        .share(shareDetails)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  return renderShareBtn(handleSharing);
};

export default Share;
