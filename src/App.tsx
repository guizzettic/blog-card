import "./index.css";
import BlogCard from "./BlogCard";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const Card = {
  img: image,
  label: "Interior",
  title: "Top 5 Living Room Inspirations",
  message:
    "Curated vibrant colors for your living, make it pop & calm at the same time.",
  link: "https://www.google.com",
};

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-light to-gray-medium p-4 sm:bg-gradient-to-r sm:from-gray-light sm:to-gray-medium">
      <BlogCard
        img={Card.img}
        label={Card.label}
        title={Card.title}
        message={Card.message}
        link={Card.link}
      />
    </div>
  );
}

export default App;
