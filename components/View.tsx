import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { startup_views_query } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";


const View = async ({ id }: { id: string }) => {
  // Fetch the views data from Sanity
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(startup_views_query, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

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
