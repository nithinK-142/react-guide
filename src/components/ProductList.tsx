import products from "@/products.json";
import { useStoreSelectors } from "@/store/cart-store";

const ProductList = () => {
  const cart = useStoreSelectors.use.cart();
  const addToCart = useStoreSelectors.use.addToCart();
  const removeFromCart = useStoreSelectors.use.removeFromCart();
  return (
    <div className="grid grid-cols-3">
      <div className="grid grid-cols-2 col-span-2 gap-4">
        {products.map(({ id, name, description }) => (
          <div
            key={id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 group"
          >
            <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:dark:text-gray-200">
              {description}
            </p>
            <button
              type="button"
              onClick={() => addToCart({ id, name, description })}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col col-span-1 gap-4">
        {cart.map(({ id, name, description }) => (
          <div
            key={id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 group"
          >
            <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:dark:text-gray-200">
              {description}
            </p>
            <button
              type="button"
              onClick={() => removeFromCart(id)}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
