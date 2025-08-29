const LatestPost = () => {
  return (
    <div className="my-30 p-4 flex flex-col gap-12 diagonalbg text-light">
      <h1 className="uppercase text-light text-3xl font-bold tracking-widest underline decoration-[#444] decoration-7 underline-offset-[1em] ">
        Latest Chapter
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center ">
        <h2 className="font-semibold text-3xl tracking-wide">
          The Legend of Ice
        </h2>
        <h3 className="font-semibold text-xl tracking-wide">
          Book IV: From The Depths, He Rose
        </h3>
        <h3 className="font-semibold text-xl tracking-wide">Chapter 112</h3>
        <p className="indent-5 px-10 text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          quod consectetur repudiandae error accusantium illum necessitatibus
          aliquid repellat architecto qui suscipit laboriosam inventore ab.
          Assumenda unde quam asperiores illum iusto.
        </p>
        <button className="bg-[#444] p-3 text-light rounded-xl font-semibold hover:bg-[#b5a642] cursor-pointer shadow-2xl">
          <a href="/">Read Chapter</a>
        </button>
      </div>
    </div>
  );
};
export default LatestPost;
