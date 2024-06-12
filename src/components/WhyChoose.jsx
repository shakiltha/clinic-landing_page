// import Ellipse from "../assets/images/Ellipse 413.png";
import EllipseCropped from "../assets/images/Ellipse-cropped.png";
import DotBox from "../assets/images/Design element - Circles.png";
import Box from "../assets/images/Design element - pink.png";
import ConsultationImg from "../assets/images/Icon.png";
import ServiceImg from "../assets/images/Icon-1.png";
import DoctorImg from "../assets/images/Icon-2.png";

const WhyChoose = () => {
  return (
    <div className="mx-2 lg:m-0 mt-[50px] lg:mt-[550px] lg:flex lg:items-center lg:justify-center lg:gap-4">
      <section className="lg:relative lg:w-[35%] xl:w-[60%]">
        <img
          src={EllipseCropped}
          alt=""
          className="hidden lg:block lg:absolute lg:top-0  lg:z-10"
        />
        <section className="my-4 lg:ml-3 lg:w-[22rem] xl:w-[40rem] lg:absolute lg:top-28 xl:left-16 lg:z-20">
          <h3 className="font-neueHaasDisplayMedium text-2xl lg:text-4xl">
            Why Choose Our Clinic?
          </h3>
          <p className="open-sans font-normal">
            Whether you seek expert care for a specific concern or want a
            dedicated partner in lifelong wellness, choose 'vitality clinic'.
            Our compassionate team offers a full spectrum of services, from
            preventive checkups and advanced diagnostics to personalized
            treatment plans.
          </p>
          <section className="text-center lg:mt-6 lg:flex lg:justify-around lg:gap-4">
            <section>
              <h4 className="font-neueHaasDisplayBold text-2xl lg:text-4xl font-bold ">
                25
              </h4>
              <p className="open-sans font-normal">Best Doctors</p>
            </section>
            <section>
              <h4 className="font-neueHaasDisplayBold text-2xl lg:text-4xl font-bold ">
                3
              </h4>
              <p className="open-sans font-normal">Clinic Locations</p>
            </section>
          </section>
          <section className="text-center lg:flex lg:justify-around lg:mt-5 lg:gap-4">
            <section>
              <h4 className="font-neueHaasDisplayBold text-2xl lg:text-4xl font-bold ">
                150+
              </h4>
              <p className="open-sans font-normal">Patients Capacity</p>
            </section>
            <section>
              <h4 className="font-neueHaasDisplayBold text-2xl lg:text-4xl font-bold ">
                1900+
              </h4>
              <p className="open-sans font-normal">Patients Cured</p>
            </section>
          </section>
        </section>
      </section>

      <section className="lg:mt-[100px] lg:ml-36 xl:ml-80 lg:w-full lg:h-full">
        <section className="lg:relative lg:w-full lg:h-full">
          <img
            src={Box}
            alt=""
            className="hidden lg:block lg:absolute lg:top-9 lg:left-36 lg:z-10"
          />
          <img
            src={DotBox}
            alt=""
            className="hidden lg:block lg:absolute lg:top-[35rem] lg:left-40 lg:z-10"
          />

          <section className="text-center lg:p-3 lg:text-left my-2 lg:shadow-lg lg:w-[291px] lg:h-[300px] lg:absolute lg:z-20 lg:bg-white">
            <img src={ConsultationImg} alt="" className="mx-auto lg:mx-2" />
            <h5 className="font-neueHaasDisplayMedium font-bold text-xl lg:text-2xl my-2">
              Get Free Consultation
            </h5>
            <p className="open-sans font-normal">
              Schedule a free consultation to discuss your health concerns with
              our caring team.{" "}
            </p>
          </section>
          <section className="my-2 text-center lg:text-left lg:p-3 lg:shadow-lg lg:w-[291px] lg:h-[300px] lg:absolute lg:top-32 lg:left-80 lg:z-20 lg:bg-white">
            <img src={ServiceImg} alt="" className="mx-auto lg:mx-2" />
            <h5 className="font-neueHaasDisplayMedium font-bold text-xl lg:text-2xl my-2">
              24 Hours Service
            </h5>
            <p className="open-sans font-normal">
              Never wait for care. Our 24/7 urgent care service is here for
              unexpected injuries or sudden illness.
            </p>
          </section>
          <section className="mt-2 text-center lg:text-left lg:p-3 lg:shadow-lg lg:w-[291px] lg:h-[300px] lg:absolute lg:top-80 lg:z-20 lg:bg-white">
            <img src={DoctorImg} alt="" className="mx-auto lg:mx-2" />
            <h5 className="font-neueHaasDisplayMedium font-bold text-xl lg:text-2xl my-2">
              Qualified Doctors
            </h5>
            <p className="open-sans font-normal">
              In trusted hands. Our clinic is staffed by highly qualified
              doctors, board-certified in their specialties.
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default WhyChoose;
