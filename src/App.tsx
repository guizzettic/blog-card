import "./index.css";
import BlogCard from "./BlogCard";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const Card = [
  {
    img: image,
    label: "Interior",
    title: "Top 5 Living Room Inspirations",
    message:
      "Curated vibrant colors for your living, make it pop & calm at the same time.",
    link: "https://www.google.com",
  },
];

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-light to-gray-medium p-4">
      <BlogCard
        img={Card[0].img}
        label={Card[0].label}
        title={Card[0].title}
        message={Card[0].message}
        link={Card[0].link}
      />
    </div>
  );
}

export default App;
