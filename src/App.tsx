import "./index.css";
import React, { Suspense } from "react";
import image from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

const Card = {
  img: image,
  label: "Interior",
  title: "Top 5 Living Room Inspirations",
  message:
    "Curated vibrant colors for your living, make it pop & calm at the same time.",
  link: "https://www.google.com",
};

const BlogCard = React.lazy(() => import("./BlogCard"));

function App() {
  return (
    <div className="flex h-screen w-screen justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 pt-[120px]">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogCard
          img={Card.img}
          label={Card.label}
          title={Card.title}
          message={Card.message}
          link={Card.link}
        />
      </Suspense>
    </div>
  );
}

export default App;
