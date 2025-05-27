import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="bg-blue-600 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-white text-3xl font-extrabold">iMarket</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nossos Produtos</h2>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900 flex items-center">
            <FiShoppingCart size={24} />
            <span className="ml-2 font-semibold">Meu Carrinho</span>
          </Link>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
