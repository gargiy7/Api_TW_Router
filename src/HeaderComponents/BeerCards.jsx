const BeerCards = ({
  name,
  image_url,
  tagline,
}) => {
  return (
    <div className="w-64 h-88 p-4 m-4 bg-orange-50 rounded-xl shadow-lg cursor-pointer ">
      <h3 className = 'flex justify-center font-mono text-xl underline hover:decoration-dashed'>{name}</h3>
      <div className = 'flex justify-center'><img className='h-64' src={image_url} /></div>
      <p className = 'flex justify-center italic'>"{tagline}"</p>
    </div>
  );
};
export default BeerCards;