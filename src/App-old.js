import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F270564505809B4B70AA6CD",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeop",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F23683B505809B4B8240464",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2657B9505809B4B634FF66",
    rating: 3.2,
  },
];

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          rating={dish.rating}
          picture={dish.image}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
