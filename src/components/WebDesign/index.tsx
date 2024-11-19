import WebDesignCard from "./WebDesignCard";
import { services } from "../../constants";
import OtherServices from "../OtherServices";

const WebDesignContainer = () => {
  return (
    <section className="flex justify-center py-10">
      <div className="w-10/12 ">
        <div className="flex gap-8">
          {services.map((feature) => (
            <WebDesignCard
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              features={feature.features}
            />
          ))}
        </div>
        <div className="flex mt-6 items-center justify-center">
          <div className=" w-full p-[0.5px] bg-gradient-to-r from-dark to-dark-blue" />
          <p className="text-white w-1/3 text-center text-lg font-bold">
            Other Services
          </p>
          <div className=" w-full p-[0.5px] bg-gradient-to-l from-dark to-dark-blue" />
        </div>
        <OtherServices />
      </div>
    </section>
  );
};

export default WebDesignContainer;
