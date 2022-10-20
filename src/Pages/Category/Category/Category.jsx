import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const newsCategory = useLoaderData();
  return (
    <div>
      <h4>This is Category has {newsCategory.length} newses</h4>
      {
        newsCategory.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
      }
    </div>
  );
};

export default Category;
