const Card = () => {
  return (
    <div className='relative w-full items-center text-[#e3f6f5] '>
      <div>
        <h3 class='text-center font-bold font-mono text-4xl py-10  text-[#e3f6f5]'>
          What we offer
        </h3>
      </div>
        <div className='grid grid-cols-5 grid-rows-5 gap-4 bg-white border-8 border-red-500'>
          <div className='col-span-3 row-span-2'>1</div>
          <div className='row-span-2 row-start-3'>2</div>
          <div className='row-span-2 row-start-3'>3</div>
          <div className='row-span-2 row-start-3'>4</div>
          <div className='col-span-3 row-span-2 row-start-5'>5</div>
        </div>
    </div>
  )
}

export default Card
