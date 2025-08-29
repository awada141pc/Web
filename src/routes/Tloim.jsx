import ChapterList from "../components/chapterlist/chapterList";
const TloiM = () => {
  return (
    <div className="text-dark my-10">
      <div className="flex flex-col gap-15 md:items-center md:justify-center ">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold uppercase">The Legend of Ice</h1>
          <h1 className="text-5xl p-0 m-0">&#x2744;</h1>
        </div>
        <div className="flex flex-col items-center justify-center my-5 max-w-5xl px-0 md:flex-row md:gap-15 diagonalbg2">
          <div className="w-60 py-10 md:flex-0.5 md:px-1 md:py-5 md:w-80">
            <img src="./tloi.png" alt="" className="w-full h-80 md:h-100" />
          </div>
          <div className=" flex flex-col items-center justify-center md:flex-1 md:flex md:flex-col md:items-start md:gap-2 md:px-5 ">
            <h3 className="Capitalize text-2xl font-semibold text-center md:text-left">
              Synopsis
            </h3>
            <p className="p-10 text-lg font-medium md:p-0">
              Wind. Water. Ice. <br />
              Who am I? What am I? <br />
              At first I thought I knew the answer to these two questions, but
              then, after that dream, and after that visit on my fifteenth,
              everything changed in my life. <br />
              I thought it would be amazing to have power, but now I wish that I
              didn't have it. <br />
              Who am I? <br />
              I am Water. I am Wind. And I am Ice. <br />
              Read The Legend of Ice to know about my adventures! <br />
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 px-15 flex flex-col md:items-start md:justify-start text-dark gap-5">
        <h2 className="text-xl font-semibold">Content</h2>
        <div className="flex flex-col">
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
          <ChapterList />
        </div>
      </div>
    </div>
  );
};
export default TloiM;
