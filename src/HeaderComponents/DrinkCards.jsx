const DrinkCards = ({
  strDrink,
  strDrinkThumb,

}) => {
  return (
    <div className="w-64 h-88 p-4 m-4 bg-orange-100 rounded-xl shadow-lg  shadow-orange-100 cursor-pointer ">
      <h3 >{strDrink}</h3>
      <img src={strDrinkThumb} />
    </div>
  );
};
export default DrinkCards;