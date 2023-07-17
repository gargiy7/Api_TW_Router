const ProductCards = ({
  name,
  image_link,
  // website,
  // address: { street },
  // address: { geo: { lat, lng } },
}) => {
  return (
    <div className="w-64 h-88 p-4 m-4 bg-orange-100 rounded-xl shadow-lg cursor-pointer ">
      <h3>{name}</h3>
      <img src={image_link} />
    </div>
  );
};

export default ProductCards;