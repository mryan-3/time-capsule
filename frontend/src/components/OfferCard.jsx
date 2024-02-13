const OfferCard = ({ icon, title, description, width }) => {
  return (
    <div className='relative w-full '>
      <div className="flex justify-center rounded-2xl shadow-lg border-8 border-black items-center flex-col">
      <img src={icon}  width={width}/>
      <div>
        <div>
          <h3> {title}</h3>
          <p>{description}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OfferCard
