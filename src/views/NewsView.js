import React from "react";
import { FilterView, HeaderComp, NewsMap } from "../components/index";
export default function NewsView() {
  return (
    <div>
      <HeaderComp />
      <FilterView />
      <NewsMap />
    </div>
  );
}
