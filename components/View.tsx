import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { startup_views_query } from "@/sanity/lib/queries";

const View = async ({ id }) => {
  // Fetch the views data from Sanity
  const data = await client
    .withConfig({ useCdn: false })
    .fetch(startup_views_query, { id });

  // Extract views or set default to 0
  const totalViews = data?.views ?? 0;

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {totalViews} {totalViews === 1 ? "view" : "views"}
        </span>
      </p>
    </div>
  );
};

export default View;
