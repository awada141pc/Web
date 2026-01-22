import Tiptap from "../components/texteditor/Texteditor";

const Write = () => {
  {
    /* const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div>Log in to read chapter!</div>;
  }*/
  }
  return (
    <div className=" flex flex-col gap-6 text-dark">
      <h1 className="text-3xl font-bold uppercase underline decoration-[#BDB76B] decoration-7 underline-offset-[1rem]">
        Write a new chapter
      </h1>
      <form action="" className="flex flex-col flex-1 gap-7 px-10 mb-6 ">
        <div className="flex items-center gap-6">
          <label className="font-semibold text-lg">Select Novel:</label>
          <select name="nov" id="" className="p-2 rounded-xl shadow-md">
            <option value="tloi">The Legend of Ice</option>
            <option value="ttw">The Time Wanderer</option>
            <option value="twb">The Worlds Beyond</option>
          </select>
        </div>
        <div className="flex items-center gap-6">
          <label className="font-semibold text-lg">Book:</label>
          <select name="book" id="" className="p-2 rounded-xl shadow-md">
            <option value="tloi">Book I</option>
            <option value="ttw">Book II</option>
            <option value="twb">Book III</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Chapter Title"
          className="text-xl font-semibold bg-transparent outline-none"
        />
        <div className="px-3">
          <Tiptap />
        </div>
        <button className="bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] text-light rounded-xl font-semibold content-center hover:bg-[#b5a642] cursor-pointer shadow-md mb-5 md:mb-0 border-[#fff] w-36 p-3">
          Publish
        </button>
      </form>
    </div>
  );
};
export default Write;
