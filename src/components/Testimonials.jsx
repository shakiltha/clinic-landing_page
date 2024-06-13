import person1 from "../assets/images/Image.png";
import person2 from "../assets/images/Image-1.png";
// import openQuote from "../assets/images/Icon metro-quote.png";
// import endQuote from "../assets/images/Icon metro-quote-1.png";

const Testimonials = () => {
  return (
    <div className="mx-2 lg:mt-[40rem]">
      <div className="xl:w-2/4 xl:mx-auto xl:text-center">
        <h2 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl">
          Testimonials
        </h2>
        <p className="open-sans font-normal">
          "Don't just take our word for it! See what real people are saying
          about their experience at Vitality Clinic. Our patients rave about our
          friendly staff, effective treatments, and commitment to helping them
          achieve optimal health. Read their stories and see how Vitality Clinic
          can help you regain your vitality and live life to the fullest!"
        </p>
      </div>

      <section className="lg:flex">
        <section className="shadow-xl my-3 p-2 open-quote md:w-[561px] md:mx-auto lg:w-[460px] xl:w-[561px]">
          <section>
            <img src={person1} alt="" />
            <h5 className="roboto-bold">Josh brollins</h5>
            <p className="roboto-regular">joshbrollins.com</p>
          </section>
          <p className="roboto-regular">
            "For years, I felt sluggish and unmotivated. I just couldn't seem to
            get my energy back. Then I found Vitality Clinic. Dr. [Doctor's
            name] listened carefully to my concerns and created a personalized
            plan that addressed my specific needs. Now, I wake up feeling
            refreshed and have the energy to tackle my day. Vitality Clinic
            helped me rediscover my zest for life!"
          </p>
        </section>
        <section className="shadow-xl my-3 p-2 open-quote md:w-[561px] md:mx-auto lg:w-[460px] xl:w-[561px]">
          <section>
            <img src={person2} alt="" />
            <h5 className="roboto-bold">Dave inau</h5>
            <p className="roboto-regular">daveinau.com</p>
          </section>
          <p className="roboto-regular">
            "Struggling with chronic pain for so long was incredibly
            discouraging. I felt like I had tried everything. Then I came to
            Vitality Clinic. The team here took a holistic approach and worked
            with me to find the root cause of my pain. The treatments they
            recommended have made a significant difference. For the first time
            in years, I'm pain-free and hopeful about the future. Thank you,
            Vitality Clinic!"
          </p>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
