import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center text-xl">
        Seu carrinho está vazio.
        <div className="mt-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Voltar para a loja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex items-center mb-4 border-b pb-4">

            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
              <p>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              className="text-red-600 hover:text-red-800 font-bold"
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Limpar Carrinho
        </button>

        <p className="text-xl font-bold">Total: R$ {totalPrice.toFixed(2)}</p>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Voltar para a loja
        </button>
      </div>
    </div>
  );
};

export default Cart;
