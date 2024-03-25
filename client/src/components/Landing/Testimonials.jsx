import { testimonials } from "../../constants";

const Testimonials = () => {
  return (
    <div className="mb-8 tracking-wide z-50" style={{zIndex:99}}>
      <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10 z-50">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center z-50">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="z-50 w-full sm:w-1/2 lg:w-1/3 px-4 py-2 hover:scale-110 transition duration-300 delay-100">
            <div className="bg-neutral-900  rounded-md p-6 text-md border hover:bg-slate-800 transition delay-200 duration-200 ease-in-out border-neutral-800 font-thin">
              <p className="text-indigo-400 z-50">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-white">{testimonial.user}</h6>
                  <span className="z-50 text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
