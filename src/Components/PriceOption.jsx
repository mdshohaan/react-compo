import PropTypes from "prop-types"; // ES6
import Feature from "./Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-bold text-center">Price:{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn w-full mt-12 bg-green-600 text-white font-bold border-none">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
