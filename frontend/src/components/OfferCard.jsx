const OfferCard = ({ icon, title, description}) => {
  return (
      <div className='text-center border-2 rounded-md border-[#dca26d] w-full h-[400px] p-2 overflow-hidden '>
        <img src={icon} className="max-h-[75%] mx-auto "/>
        <h3 className="font-medium p-1 font-serif text-3xl"> {title}</h3>
        <p className="text-sm italic font-sans p-2 ">{description}</p>
      </div>
  )
}

export default OfferCard
