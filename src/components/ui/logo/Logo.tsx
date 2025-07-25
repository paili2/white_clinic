import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:block relative w-56 h-12">
      <Image
        src={"/logos/logo-removebg.png"}
        alt="logo"
        fill
        className="object-contain"
        priority
        sizes="144px"
      />
    </div>
  );
};

export default Logo;
