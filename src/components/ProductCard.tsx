import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="w-60 h-80 flex flex-col justify-between border rounded-lg p-4 shadow-md bg-white text-center overflow-hidden">
      <div className="w-full h-40 overflow-hidden rounded-lg mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 font-bold text-green-600">R$ {product.price.toFixed(2)}</p>
      </div>
      <button
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
