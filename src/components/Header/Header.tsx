import NavBar from "./NavBar/NavBar";
// icons
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className=" flex flex-row items-center justify-between h-[48px] ">
      <p className="font-bold text-[20px] leading-[28px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        shahada
      </p>

      <NavBar />
      <div className=" hidden  lg:block">
        <CiSearch size={30} />
      </div>
    </header>
  );
};

export default Header;
