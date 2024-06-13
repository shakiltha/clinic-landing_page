import doctor1 from "../assets/images/Card 1.png";
import doctor2 from "../assets/images/Card 2.png";
import doctor3 from "../assets/images/Card 3.png";
import ellipse from "../assets/images/Ellipse 413.png";
import dotBox from "../assets/images/Design element - Circles.png";
const MeetOurDoctors = () => {
  return (
    <div className="my-4 mx-2 lg:mx-auto lg:mt-[45rem]">
      <section>
        <section className="lg:w-96 lg:mx-auto lg:text-center">
          <h4 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl">
            Meet Our Great Doctors
          </h4>
          <p className="open-sans font-normal">
            Our team is comprised of highly skilled and compassionate
            professionals dedicated to your health and well-being.
          </p>
        </section>
        <section className="lg:w-full lg:h-full lg:relative">
          <img
            src={dotBox}
            className="hidden lg:block lg:absolute lg:top-[30rem] xl:top-[30rem] xl:left-40"
            alt=""
          />
          <img
            src={ellipse}
            className="hidden lg:block absolute lg:left-[44rem] xl:left-[70rem]"
            alt=""
          />
          <section className="lg:absolute lg:top-16 lg:left-4 xl:left-48">
            <section className="lg:flex lg:gap-2 lg:justify-center">
              <section>
                <img className="mx-auto" src={doctor1} alt="" />
              </section>
              <section>
                <img className="mx-auto" src={doctor2} alt="" />
              </section>
              <section>
                <img className="mx-auto" src={doctor3} alt="" />
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default MeetOurDoctors;
