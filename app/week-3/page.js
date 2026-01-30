import GroceryItemList from "./GroceryItemList";

export default function Page() {
  const pageHeader = {
    title: "Week 3: Shopping List",
    description: "Using props to build reusable components.",
  };

  return (
    <main className="p-6">
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">{pageHeader.title}</h1>
        <p className="text-gray-700">{pageHeader.description}</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Grocery Items</h2>
        <GroceryItemList />
      </section>
    </main>
  );
}
