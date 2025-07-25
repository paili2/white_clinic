import Title from "@/src/components/ui/logo/typhography/Title";
import FeatureCard from "./FeatureCard";
import { ArrowBigRight, Calendar, Sparkles } from "lucide-react";
import Home from "@/app/page";

const ServiceProcess = () => {
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <Title>서비스 프로세스</Title>
      <div className="flex gap-[50px] justify-center items-center">
        <FeatureCard title={"예약"} icon={Calendar}></FeatureCard>
        <ArrowBigRight
          size={48}
          className="font-bold fill-[#1f70ab] text-[#1f70ab]"
        ></ArrowBigRight>
        <FeatureCard title={"방문"} icon={Home}></FeatureCard>
        <ArrowBigRight
          size={48}
          className="font-bold fill-[#1f70ab] text-[#1f70ab]"
        ></ArrowBigRight>
        <FeatureCard title={"청소 완료"} icon={Sparkles}></FeatureCard>
      </div>
    </div>
  );
};

export default ServiceProcess;
