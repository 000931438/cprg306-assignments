export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="border p-4 rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p className="text-sm text-gray-600">Category: {category}</p>
    </li>
  );
}
