import React from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  return (
    <main>
      <div className="container">
        <h2>Questions and answers about login</h2>
        <section className="info">
          {data.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
