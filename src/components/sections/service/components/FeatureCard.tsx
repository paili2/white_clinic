import { Briefcase, Icon } from "lucide-react";

type FeatureCardProps = { title: string; icon: React.ElementType };
const FeatureCard = ({ title, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col justify-center items-center gap-5">
      <Icon className=" text-[#1f70ab]" size={120} />
      <span className="text-2xl text-[#1f70ab] font-bold">{title}</span>
    </div>
  );
};

export default FeatureCard;
