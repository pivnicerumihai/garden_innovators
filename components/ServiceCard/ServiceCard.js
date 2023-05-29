export default function ServiceCard({ items, title }) {
  return (
    <div className="serviceCard rounded-lg shadow-lg p-8 px-16 bg-white ">
      <h3 className="text-2xl font-bold mb-8 text-center text-accent">{title}</h3>
      <ul className="space-y-4 text-center">
        {items.map((item, index) => (
          <li key={index} className="text-lg md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}