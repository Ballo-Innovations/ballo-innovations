'use client'
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row text-center mt-20">
      <div className="flex-center flex-col gap-5 lg:gap-0">
        <p className="font-bold text-8xl sm:text-9xl">
          <CountUp end={3.5} duration={7} suffix="mill" decimals={1} enableScrollSpy scrollSpyOnce />
        </p>
        <p className="font-bold text-3xl lg:mt-10 lg:mb-5">Reach</p>
        <p className="lg:px-20">nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation </p>
      </div>

      <div className="flex-center flex-col gap-5 lg:gap-0">
        <p className="font-bold text-8xl sm:text-9xl">
          <CountUp end={56} duration={5} suffix="%" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="font-bold text-3xl lg:mt-10 lg:mb-5">ROI</p>
        <p className="lg:px-20">nostrud eu et tempor culpa ad sint sit eiusmod laboris eu occaecat esse sunt in exercitation </p>
      </div>
    </div>
  )
}

export default Counter