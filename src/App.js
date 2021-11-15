// @src/App.jsx

import React from "react";

import styles from "./index.css";
import Card from "./components/Card";
import posts from "./data/posts";

const App = () => {
  return (
    <main className="bg-blue-100">
      <section className="relative w-screen h-screen">
        <div className="flex mx-auto gap-5 flex-nowrap absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
          {posts.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
