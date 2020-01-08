import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Footer from "./Footer";
import sourdough from "../img/sourdough.jpg";
import pancakes from "../img/pancakes.jpg";
import chocolate from "../img/chocolate.jpg";
import kale from "../img/kale.jpg";
import corn from "../img/corn.jpg";
import veggie from "../img/veggie.jpg";
import soup from "../img/soup.jpg";
import steak from "../img/steak-veggies.JPG";
import chicken from "../img/chicken.jpg";
import fish from "../img/fish.jpg";
import sushi from "../img/sushi.jpg";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const guestData = [
  { img: sourdough, title: `Grandma's Sourdough`, info: `Approx 2 hrs` },
  { img: pancakes, title: `Whole Wheat Pancakes`, info: `30 min` },
  { img: chocolate, title: `Easy Chocolate Volcano`, info: `30 min` },
  { img: kale, title: `Kale Salad`, info: `30 min` },
  { img: corn, title: `Creamy Corn`, info: `30 min` },
  { img: veggie, title: `Very Veggie Burger`, info: `30 min` },
  { img: soup, title: `Ellies Magic Soup`, info: `30 min` },
  { img: steak, title: `Steak & Veggies`, info: `30 min` },
  { img: chicken, title: `Roast Chicken`, info: `30 min` },
  { img: fish, title: `Fish Basics`, info: `30 min` },
  { img: sushi, title: `Sushi Sushi`, info: `30 min` }
];

guestData.map(item => {
  const card = item;
  return card;
});

const GuestDashboard = () => {
  const [food, setFood] = useState([
    {
      recipe_name: "",
      prep_time: "",
      recipe_photo: ""
    }
  ]);
  const [search, setSearch] = useState("");
  const handleChange = event => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const results = food.filter(recipe =>
      recipe.recipe_name.toLowerCase().includes(search)
    );
    setFood(results);
    console.log(results);
  }, [search]);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then(res => {
        setFood(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="dashboard-search">
        <h1
          style={{
            color: "#07fe20"
          }}
        >
          Featured
        </h1>
        <form>
          <input
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: 0,
              width: "200px"
            }}
            autoComplete="off"
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Search.."
            name="search"
          />
        </form>
      </div>

      <section>
        <h2 style={{ color: "#fff" }}>Something For Dinner</h2>
        <div className="dashboard-container">
          {food.map(data => {
            return (
              <RecipeCard
                img={data.recipe_photo}
                title={data.recipe_name}
                info={data.prep_time}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GuestDashboard;
