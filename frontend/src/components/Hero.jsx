import HeroI from '../assets/ba.png'
const Hero = () => {
  return (
    <div className='w-full h-screen text-[#000000]'>
      <div className='flex flex-col justify-center items-center relative'>
        <div className='flex flex-col justify-center items-center p-4 '>
          <h1 className='text-5xl text-center font-bold p-2 text-[#30494b] font-serif'>
            Time Capsule
          </h1>
          <h3 className='text-xl text-center font-medium italic p-2'>
            Capture Your Moments. Unforgettable Tomorrow.
          </h3>
          <h2 className='text-2xl italic text-center p-2'>
            Store messages, pictures and memories to open later in life!
          </h2>
          <button class='group relative pt-5'>
            <div class='relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-[#a4ab9a] px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3'>
              Create Your Time Capsule Now
            </div>
            <div class='absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a4ab9a,10px_10px_#dca26d,15px_15px_#5a9c91]'></div>
          </button>
        </div>
        <img src={HeroI} className='w-full lg:h-screen' />
      </div>
    </div>
  )
}

export default Hero
