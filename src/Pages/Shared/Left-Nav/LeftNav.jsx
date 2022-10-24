import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-eight-theta.vercel.app/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="d-none d-lg-block">
          {
              categories.map(category => <p key={category.id}>
                  <Link to={`category/${category.id}`}>{category.name}</Link>
              </p>)
          }
    </div>
  );
};

export default LeftNav;
