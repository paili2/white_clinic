import Logo from "../../ui/logo/Logo";

const Header = () => {
  return (
    <div className="w-full h-[80px] flex items-center  sticky p-2 top-0 z-50  shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="w-full max-w-[1300px] mx-auto flex items-center justify-between">
        <Logo></Logo>
        <div className="flex gap-5">
          <a href="">견적</a>
          <a href="">서비스</a>
          <a href="">예약문의</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
