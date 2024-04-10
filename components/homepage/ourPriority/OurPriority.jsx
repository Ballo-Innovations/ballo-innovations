import MessageBubble from './messageBubble/MessageBubble'

const OurPriority = () => {
  return (
    <section className='bg-[var(--brand-color-5)] py-20 px-5 md:px-32'>
      <div className="flex flex-col">
        <h2 className='subheading mb-10 lg:mb-0 text-[var(--brand-color-1)] text-center lg:text-start'>
          Our Priority
        </h2>
        <MessageBubble direction="right" text="nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation nostrud eu et tempor culpa ad sint sit eiusmod laboris" />
        <MessageBubble direction="left" text="nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation" />
        <MessageBubble direction="right" margin="lg:mr-16" text="nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation" />
        <MessageBubble loading={true} direction="left"  margin="lg:ml-20" text="nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation" />
        <MessageBubble loading={true} direction="right" text="nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation" />
      </div>
    </section>
  )
}

export default OurPriority