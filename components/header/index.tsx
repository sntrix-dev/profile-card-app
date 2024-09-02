import { FC, HTMLAttributes } from "react";

// interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC = () => {
  return (
    <header className="w-full p-4 bg-white/30 relative z-10">
      <h1 className="text-white">Profile</h1>
    </header>
  );
};

export default Header;
