import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <div className="mt-4 space-y-8">
      {categories.map((category) => (
        <div key={category}>
    
          <h2 className="text-2xl font-bold mb-3 capitalize">
            {category}
          </h2>

          <ul className="space-y-3">
            {grouped[category].map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
