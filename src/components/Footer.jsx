import footerPersonImg from "../assets/images/Footer Image.png";
import design1 from "../assets/images/Background.png";
import dotBox from "../assets/images/Design element - Circles.png";
import { useState } from "react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const style = {
    boxShadow: focused ? "0 0 8px rgba(0, 0, 0, 0.5)" : "none",
  };
  const setToFocused = () => setFocused(true);
  const setToUnfocused = () => setFocused(false);
  return (
    <div className="mx-2 mb-5 mt-5 xl:overflow-hidden">
      <div className="relative">
        <div className="xl:w-full xl:h-full">
          <img
            src={design1}
            alt=""
            className="hidden xl:w-[60rem] xl:block xl:-ml-[30rem] xl:mt-18"
          />
          <img
            src={dotBox}
            alt=""
            className="hidden xl:block xl:-mt-60 xl:ml-[60rem]"
          />
        </div>
        <div className="xl:absolute xl:top-0 xl:left-0 xl:w-full">
          <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-2">
            <div className="lg:w-[500px] mx-auto my-3">
              <img src={footerPersonImg} className="mx-auto" alt="" />
            </div>
            <div className="lg:w-[30rem]">
              <h4 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl">
                Take Charge of Your Wellbeing - Schedule Your Appointment Today
              </h4>
              <p className="open-sans font-normal text-lg">
                At Vitality Clinic, we believe everyone deserves to feel their
                best. Schedule your appointment and embark on a personalized
                journey to optimal health. Our dedicated team will work closely
                with you to understand your unique needs and goals. We offer a
                variety of services to address your concerns and help you
                achieve a healthier, more vibrant life.
              </p>
            </div>
            <div
              style={style}
              className="w-[340px] h-[400px] flex flex-col justify-center items-center mx-auto bg-white border p-3 my-4"
            >
              <h4 className="font-neueHaasDisplayMedium text-xl my-2">
                Book an Appointment
              </h4>
              <input
                type="text"
                placeholder="Full name"
                className="pl-2 w-80 h-8 my-2 border"
                onFocus={setToFocused}
                onBlur={setToUnfocused}
              />
              <input
                type="text"
                placeholder="Phone number"
                className="pl-2 w-80 h-8 my-2 border"
                onFocus={setToFocused}
                onBlur={setToUnfocused}
              />
              <select
                name="programs"
                id="programs"
                className="pl-2 w-80 h-8 mb-2 border"
                onFocus={setToFocused}
                onBlur={setToUnfocused}
              >
                <option value="">Dr. Lindsey Botosh</option>
                <option value="dr. jon doe">Dr. Jon Doe</option>
                <option value="dr. lindsey botosh">Dr. Lindsey Botosh</option>
              </select>
              <input
                type="date"
                className="pl-2 w-80 h-8 my-2 border"
                onFocus={setToFocused}
                onBlur={setToUnfocused}
              />
              <button className="btn w-full mt-6 bg-[#1466CF] font-neueHaasDisplayMedium text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center lg:mt-7 lg:text-right">
        &copy; vitality clinic 2024
      </p>
    </div>
  );
};

export default Footer;
