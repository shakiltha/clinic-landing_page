import HeartImg from "../assets/images/Path 2380.png";
import XrayIcon from "../assets/images/x-ray.png";
import CrutchesIcon from "../assets/images/Icons.png";
import PulmonaryIcon from "../assets/images/pulmonary.png";
import BrainIcon from "../assets/images/neurology.png";
import DentalIcon from "../assets/images/Icon-3.png";
import DotBox from "../assets/images/Design element - Circles.png";

const QualityCare = () => {
  return (
    <div className="relative lg:mt-10">
      <div className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:z-10">
        <img src={DotBox} alt="" />
      </div>
      <div className="lg:absolute lg:top-16 lg:bg-white lg:left-0 lg:x z-20  ">
        <div className="mt-[430px] lg:mt-12 mx-2 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:place-items-center lg:gap-5">
          <div className="lg:col-span-2">
            <h2 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl xl:text-4xl my-2">
              Quality care for you and The Once you loved
            </h2>
            <p className="open-sans font-normal mb-2">
              At "vitality clinic", we believe quality care goes beyond just
              treating illness. It's about building genuine relationships with
              our patients, listening intently to their concerns, and creating a
              personalized plan for optimal health.{" "}
            </p>
          </div>
          <div className="text-center my-2">
            <img src={HeartImg} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">
              Cardiology
            </h4>
            <p className="opens-sans font-normal">
              Expert heart care. We focus on diagnosing and treating heart
              conditions.
            </p>
          </div>
          <div className="text-center mb-2">
            <img src={XrayIcon} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">X-ray</h4>
            <p className="opens-sans font-normal">
              Fast, low-radiation X-rays. See bones clearly in minutes.
            </p>
          </div>
          <div className="text-center mb-2">
            <img src={CrutchesIcon} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">
              Crutches
            </h4>
            <p className="opens-sans font-normal">
              Crutch support. Rent or buy for temporary mobility needs.{" "}
            </p>
          </div>
          <div className="text-center mb-2">
            <img src={PulmonaryIcon} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">
              Pulmonary
            </h4>
            <p className="opens-sans font-normal">
              Breathe easier. We diagnose and treat lung conditions.
            </p>
          </div>
          <div className="text-center mb-2">
            <img src={BrainIcon} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">
              Neurology
            </h4>
            <p className="opens-sans font-normal">
              Brain & nerve care. We diagnose and treat neurological issues.
            </p>
          </div>
          <div className="text-center mb-2">
            <img src={DentalIcon} alt="" className="mx-auto" />
            <h4 className="font-neueHaasDisplayMedium text-xl my-2">
              Dentistry
            </h4>
            <p className="opens-sans font-normal">
              Bright smiles start here. Our dentists offer cleanings, fillings,
              and advanced procedures for your oral health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCare;
