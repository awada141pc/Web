const HomeSynopsis = () => {
  return (
    <div className="flex flex-col items-center justify-center px-0  my-30 gap-25">
      <h1 className="uppercase text-3xl font-bold tracking-widest underline decoration-[#BDB76B] decoration-7 underline-offset-[1em]">
        Novel Synopsis
      </h1>

      <div className="">
        <div className="flex flex-col items-center justify-center my-5 max-w-5xl px-0 md:flex-row md:gap-15">
          <div className="w-60 py-10 md:flex-0.5 md:px-1 md:py-5 md:w-80">
            <img src="./tloi.png" alt="" className="w-full h-80 md:h-100" />
          </div>
          <div className=" flex flex-col items-center justify-center md:flex-1 md:flex md:flex-col md:items-start md:gap-2 md:px-5">
            <h3 className="Capitalize text-2xl text-dark font-semibold text-center md:text-left">
              The Legend of Ice
            </h3>
            <p className="p-10 text-lg text-dark font-medium md:p-0">
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
            <button className=" bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] p-3 text-light rounded-xl font-semibold content-center hover:bg-[#b5a642] cursor-pointer shadow-2xl mb-5 md:mb-0">
              <a href="/">Read TLOI &#x2744;</a>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center my-5 max-w-5xl px-0 md:flex-row md:gap-15 diagonalbg1">
        <div className="w-60 py-10 md:flex-0.5 md:px-1 md:py-5 md:w-80">
          <img src="./ttw1.png" alt="" className="w-full h-80 md:h-100" />
        </div>
        <div className=" flex flex-col items-center justify-center md:flex-1 md:flex md:flex-col md:items-start md:gap-2 md:px-5 ">
          <h3 className="Capitalize text-2xl text-light font-semibold text-center md:text-left">
            The Time Wanderer
          </h3>
          <p className="p-10 text-lg text-light font-medium md:p-0">
            Tormented by the unjust accusations of people, Roy continues to flee
            from city to city, seeking to disappear from the police's eyes.
            Years ago, people thought he was a murderer just because he had held
            a gun in his hand. No one would believe that he was innocent, they
            just thought of him as a dangerous criminal until he was forced into
            being one. Only he knew the truth of what happened that day. But
            then, a sudden light glowed in the darkness; it was hope. Hope to
            recreate his past. Hope to clear himself from the accusations. Hope
            to wash away the years of torment. <br />
            What will Roy do to bring that hope to reality? <br />
            And who will help him when everybody abandoned him? <br />
            Find out now in "The Time Wanderer"! <br />
          </p>
          <button className="bg-[#444] p-3 text-light rounded-xl font-semibold content-center hover:bg-[#b5a642] cursor-pointer shadow-2xl mb-5 md:mb-0 border-[#fff]">
            <a href="/">Read TTW &#10711;</a>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-5 max-w-5xl px-0 md:flex-row md:gap-15 ">
        <div className="w-60 py-10 md:flex-0.5 md:px-1 md:py-5 md:w-80">
          <img src="./twb1.png" alt="" className="w-full h-80 md:h-100" />
        </div>
        <div className=" flex flex-col items-center justify-center md:flex-1 md:flex md:flex-col md:items-start md:gap-2 md:px-5">
          <h3 className="Capitalize text-2xl text-dark font-semibold text-center md:text-left">
            Coming Soon...
          </h3>
          <p className="p-10 text-lg text-dark font-medium md:p-0">
            {" "}
            unavailabe
          </p>
          <button className="bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] p-3 text-light rounded-xl font-semibold content-center hover:bg-[#b5a642] cursor-pointer shadow-2xl mb-5 md:mb-0">
            <a href="/">Read ? &#x2694;</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeSynopsis;
