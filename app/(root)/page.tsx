import { startup_query } from "@/sanity/lib/queries";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import {client} from "@/sanity/lib/client";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(startup_query);

  console.log(JSON.stringify(posts,null, 2));
  
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 100,
  //     author: { _id: 1, name: 'Adrian' }, 
  //     _id: 1,
  //     description: "This is a description",
  //     image: "https://images.unsplash.com/photo-1612736231323-e7bcba8fcbaf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots", 
  //     title: "We are Robots",
  //   },
  // ];
  
  return (
    <>
      <section
        className="pink_container
      "
      >
        <h1 className="heading">
          Connect, Innovate, Succeed - Empower Your Startup Journey.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Pitch Your Vision, Vote for Innovation, Get Recognized.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}` : "All results"}
        </p>

        <ul className="mt-7 card_grid">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <StartUpCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
