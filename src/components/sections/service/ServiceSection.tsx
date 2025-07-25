import { Briefcase, ShieldCheck, Tag, Wrench } from "lucide-react";
import FeatureCard from "./components/FeatureCard";
import Title from "../../ui/logo/typhography/Title";
import ServiceProcess from "./components/ServiceProcess";

const ServiceSection = () => {
  return (
    <div className="p-[100px] flex justify-center">
      <div className="flex flex-col items-center justify-center gap-[50px]">
        <div className="flex gap-[50px]">
          <FeatureCard title={"전문장비 세척"} icon={Briefcase}></FeatureCard>
          <FeatureCard
            title={"곰팡이 99% 제거"}
            icon={ShieldCheck}
          ></FeatureCard>
          <FeatureCard title={"투명한 가격"} icon={Tag}></FeatureCard>
          <FeatureCard title={"A/S 보장"} icon={Wrench}></FeatureCard>
        </div>
        <div className="min-h-screen">
          <Title>서비스 소개</Title>
          <div>
            <div>
              <span>분해 세척</span>
            </div>
            <div>
              <span>살균 소독</span>
            </div>
            <div>
              <span>전문 장비 사용</span>
            </div>
          </div>
        </div>
        <ServiceProcess></ServiceProcess>
      </div>
    </div>
  );
};

export default ServiceSection;
