import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
})  {
  const query = (await searchParams).query;
  const posts=[
    {
      _createdAt :"Yesterday",
      views:100,
      author:{_id:1},
      _id:1,
      description:"This is a description",
      image:'https://images.unsplash.com/photo-1612736231323-e7bcba8fcbaf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      catagory:'Robots',
      title:'We are Robots' 
    }
  ]
  return (
    <>
      <section className="pink_container
      ">
        <h1 className="heading">Connect, Innovate, Succeed - Empower Your Startup Journey.</h1>
        <p className="sub-heading !max-w-3xl">
        Pitch Your Vision, Vote for Innovation, Get Recognized.
        </p>

        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}` :'All results'}
        </p>

      </section>
    </>
  );
}
