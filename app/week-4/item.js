export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-4 rounded-lg shadow-sm bg-white mb-3">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
    </li>
  );
}
