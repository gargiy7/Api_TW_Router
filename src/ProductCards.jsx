const ProductCards = ({
  name,
  image_link,
  price,
  // website,
  // address: { street },
  // address: { geo: { lat, lng } },
}) => {
  return (
    <div className="w-64 h-88 p-4 m-4 bg-green-50 rounded-xl shadow-md shadow-yellow-100 cursor-pointer ">
      <h3>{name}</h3>
      <div className="flex justify-center"><img src={image_link} /></div>
      <p className="animate-bounce">👉 Now at ₹{price * 60}</p>
    </div>
  );
};

export default ProductCards;