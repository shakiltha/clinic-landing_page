import Background1 from "../assets/images/Background-1.png";
import CoverImg from "../assets/images/Cover Image.png";
import ClinicLogo from "../assets/images/Path.png";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={Background1} className="lg:h-[35rem] lg:w-full" alt="" />
        </div>
        <div className="flex items-center gap-3 m-2 absolute top-0">
          <img src={ClinicLogo} alt="" />
          <span className="open-sans lg:font-bold lg:text-xl">
            Vitality Clinic
          </span>
        </div>
        <div className="absolute top-10 left-0 lg:left-[4%] m-2 text-center lg:text-left lg:flex lg:justify-around lg:items-center lg:h-[30rem] lg:w-[90%] border-blue-800">
          <section className="lg:w-[20rem]">
            <h3 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl xl:text-4xl">
              Complete Health Care Solution for Everyone
            </h3>
            <p className="open-sans font-normal text-lg">
              From Prevention to Treatment, We've Got You Covered.Taking Care of
              Your Whole Health, Mind, and Body. Primary Care, Specialty
              Services, and More.
            </p>
            <button className="text-lg open-sans font-semibold bg-[#1466CF] rounded-lg text-white p-2 my-2">
              Book Now
            </button>
          </section>
          <section className="lg:w-[20rem]">
            <img src={CoverImg} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
