import { NavLink } from "react-router";
import MenuButton from "./MenuButton";

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-6.5 pt-8 md:justify-start md:pt-15 md:pr-12 md:pl-10 lg:pt-20 xl:pr-29 xl:pl-28">
      <NavLink to={"/"}>
        <MenuButton type="back" />
      </NavLink>
      <p className="text-preset-6 transparent color-gradient-2 mx-auto bg-clip-text text-transparent uppercase md:text-[104px] md:tracking-[-1px] lg:text-[136px]">
        {children}
      </p>
    </div>
  );
}

export default Header;
