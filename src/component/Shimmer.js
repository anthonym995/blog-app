const Card = () => {
  return (
    <article className="border p-5 m-2 mb-5 rounded-md shadow bg-[#f9f9f9] flex flex-col">
      <h2 className="h-7 w-full text-xl mb-3 bg-[#d3d3d3] rounded"></h2>
      <p className="h-6 w-28 text-base my-1 bg-[#d3d3d3] rounded"></p>
      <p className="h-6 mt-3 bg-[#d3d3d3] rounded"></p>
    </article>
  );
};

const Shimmer = () => {
  let listCards = Array(5)
    .fill("")
    .map((e, i) => {
      return <Card key={i} />;
    });

  return (
    <>
      <nav className="py-3 sticky top-0">
        <div className="container mx-auto px-5">
          <div className="h-8 rounded-full px-2 py-1 bg-[#d3d3d3] flex mx-auto"></div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto top-58">
        <div className="container mx-auto">
          {listCards}
        </div>
      </main>
    </>
  );
};

export default Shimmer;
