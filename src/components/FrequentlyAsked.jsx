const FrequentlyAsked = () => {
  return (
    <div className="mx-2 mt-7 xl:mt-[35rem]">
      <div className="xl:w-[40rem] xl:mx-auto xl:text-center xl:my-5">
        <h2 className="font-neueHaasDisplayMedium text-2xl lg:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="open-sans font-normal my-2">
          Find answers to common questions about our services, scheduling
          appointments, insurance, and more. If you can't find what you're
          looking for here, don't hesitate to contact us directly. We're happy
          to help you on your path to optimal health!
        </p>
      </div>

      <div>
        <div className="collapse collapse-plus bg-base-200 my-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="font-neueHaasDisplayMedium collapse-title text-xl font-medium">
            Can I book appointment behalf of someone else?
          </div>
          <div className="collapse-content">
            <p>
              In some cases, you can book an appointment for someone else at
              Vitality Clinic. However, to protect patient privacy and ensure
              accurate information is gathered, we recommend contacting the
              clinic directly. Our staff can guide you through the process and
              answer any questions you may have. If booking online is available
              and you have the person's consent, you can inquire about using
              their information during the appointment scheduling process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="font-neueHaasDisplayMedium collapse-title text-xl font-medium">
            Do I need a referral to see a Physiotherapist?
          </div>
          <div className="collapse-content">
            <p>
              Generally, you don't need a referral to see a physiotherapist at
              Vitality Clinic! Physiotherapists are considered primary
              healthcare providers, qualified to assess and treat a variety of
              conditions. However, there are a few exceptions: Insurance
              Requirements: Some insurance plans may require a doctor's referral
              for physiotherapy coverage. We recommend checking with your
              insurance provider beforehand. Government-funded Programs: If
              you're seeking physiotherapy through a government program, a
              referral might be necessary. If you're unsure whether you need a
              referral, feel free to contact Vitality Clinic directly. Our
              friendly staff can clarify any questions and help you schedule
              your appointment.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="font-neueHaasDisplayMedium collapse-title text-xl font-medium">
            Do you Have Venue Option for appointments?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! At Vitality Clinic, we prioritize offering convenient
              appointment options for our patients. We currently have
              [one/multiple] clinic locations throughout the [city/area] to
              ensure easy access for everyone. During the scheduling process,
              you'll be able to choose the venue that best suits your needs and
              location.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="font-neueHaasDisplayMedium collapse-title text-xl font-medium">
            What if I Have More questions that are not answered Here?
          </div>
          <div className="collapse-content">
            <p>
              We understand you might have additional questions beyond what's
              listed in our FAQ. At Vitality Clinic, we're committed to
              providing exceptional care and addressing all your concerns. If
              you can't find the answer you're looking for here, don't hesitate
              to contact us directly. Our friendly staff is knowledgeable and
              happy to answer your questions, discuss your specific needs, and
              guide you towards achieving optimal health. Feel free to call us
              at [+880 17 2345 2345] or send an email to [example123@gmail.com].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
