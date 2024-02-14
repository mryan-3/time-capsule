import OfferCard from './OfferCard'

const Card = () => {
  return (
    <div className=' w-full items-center text-[#e3f6f5] mt-12'>
      <div className='p-4'>
        <h3 class='text-center font-bold font-mono text-4xl text-[#e3f6f5]'>
          What we offer
        </h3>
      </div>
      <div className='flex flex-col text-black'>
        <div className='flex justify-center items-center p-4'>
          <OfferCard icon={"https://img.freepik.com/free-vector/realistic-open-parchment-scroll-transparent_107791-19331.jpg?size=626&ext=jpg&ga=GA1.1.1248635370.1707852302&semt=ais"}  title={"Write Messages"} description={"Pen personalized letters to yourself or loved ones, scheduled to be opened in the future."}/>
        </div>
        <div className='md:flex justify-center items-center w-full p-2'>
          <div className='px-2 py-2'>
            <OfferCard  icon={"https://img.freepik.com/free-photo/family-photobook-about-easter-easter-card-with-love_493343-29939.jpg?size=626&ext=jpg&ga=GA1.1.1248635370.1707852302&semt=ais"}  title={"Upload Pictures"} description={"Preserve precious memories of life's moments with photos and videos, ensuring they last a lifetime.."}/>
          </div>
          <div className='px-2 py-2'>
            <OfferCard  icon={"https://img.freepik.com/premium-photo/deadline-concept-calendar-with-date-icon-retro-label-design-hipster-background-made-triangles-color-flow-effect_226262-1216.jpg?size=626&ext=jpg&ga=GA1.1.1248635370.1707852302&semt=ais"}  title={"Schedule Delivery"} description={"Choose the exact date and time, virtual or physical, for your time capsule to be ed."}/>
          </div>
          <div className='px-2 py-2'>
            <OfferCard  icon={"https://img.freepik.com/free-photo/holding-giftboxes-valentine-s-day-celebration-happy-african-american-couple-isolated-yellow-wall-concept-human-emotions-facial-expression-love-relations-romantic-holidays_155003-29862.jpg?size=626&ext=jpg&ga=GA1.1.1248635370.1707852302&semt=ais"}  title={"Share with Loved Ones"} description={"Invite friends and family to contribute memories or join the opening ceremony, making it a shared experience."}/>

          </div>
        </div>
        <div className='flex justify-center items-center p-4'>
          <OfferCard  icon={"https://img.freepik.com/free-vector/microphone-icon_24877-51915.jpg?size=626&ext=jpg&ga=GA1.1.1248635370.1707852302&semt=ais"}  title={"Capture Moments"} description={"Record special occasions, funny anecdotes, or heartfelt messages with voice notes or short videos."}/>
        </div>
      </div>
    </div>
  )
}

export default Card
