import { features } from "../../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="mx-auto flex justify-center items-center max-w-[120px] bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 mt-10 lg:mt-14 gap-6 bg-black px-6 lg:p-8 rounded-md">
        {features.map((feature, index) => (
          <div key={index} className="card-wrapper h-[220px] w-full">
            <div className="flex card-content">
              <div className="mt-6 flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="p-2">
                <h5 className="mt-8 mb-6 text-xl text-white">{feature.text}</h5>
                <p className="text-md mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
