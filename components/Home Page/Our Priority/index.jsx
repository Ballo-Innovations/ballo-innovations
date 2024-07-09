import MessageBubble from "./messageBubble/MessageBubble";

const OurPriority = () => {
  return (
    <section className="bg-[var(--brand-color-5)] pt-20 pb-14 px-5 md:px-32 overflow-hidden z-[5]">
      <div className="flex flex-col">
        <h2 className="subheading mb-10 lg:mb-0 text-[var(--brand-color-1)] text-center lg:text-start">
          Our Priority
        </h2>
        <MessageBubble
          loading={true}
          direction="right"
          text="Here at Ballo, your goals are our goals. We turn your vision into reality."
          delay={500}
        />
        <MessageBubble
          loading={true}
          direction="left"
          text="Our focus is on you! We build personalised marketing plans that resonate with your audience."
          delay={600}
        />
        <MessageBubble
          loading={true}
          direction="right"
          margin="lg:mr-16"
          text="We listen, we strategise, we deliver. Your business growth is our top priority."
          delay={900}
        />
        <MessageBubble
          loading={true}
          direction="left"
          margin="lg:ml-20"
          text="Your success is our mission. We craft marketing strategies that elevate your brand to new heights."
          delay={1200}
        />
        <MessageBubble
          loading={true}
          direction="right"
          text="Your brand isn’t just another project, it’s a passion we invest in wholeheartedly"
          delay={1300}
        />
      </div>
    </section>
  );
};

export default OurPriority;
