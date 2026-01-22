/*import Comments from "../components/comments/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-dark">
      <h1 className="text-3xl font-bold uppercase underline decoration-[#BDB76B] decoration-7 underline-offset-[1rem]">
        The Legend of Ice
      </h1>
      <h2 className="text-2xl font-semibold py-5">Book</h2>
      <h3 className="text-xl font-semibold p-3">Chapter</h3>
      <p className="text-base font-medium px-10 md:px-20 pt-5 pb-10 indent-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos
        quidem fuga accusantium, facilis soluta quis magni provident ipsam
        distinctio magnam perspiciatis dolores eum quam qui cupiditate ipsum
        recusandae animi! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quae cumque eos, consequatur reprehenderit rerum neque laboriosam
        omnis quisquam consequuntur! Officia praesentium vitae dolorum corrupti
        explicabo molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eos quidem fuga accusantium,
        facilis soluta quis magni provident ipsam distinctio magnam perspiciatis
        dolores eum quam qui cupiditate ipsum recusandae animi! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Quae cumque eos,
        consequatur reprehenderit rerum neque laboriosam omnis quisquam
        consequuntur! Officia praesentium vitae dolorum corrupti explicabo
        molestiae excepturi ab eius facere.
      </p>
      <div className="w-full p-10">
        <Comments />
      </div>
    </div>
  );
};
export default SinglePostPage;*/
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const SinglePostPage = () => {
  const { novelId, bookId, chapterId } = useParams();

  // Fetch the data dynamically (mock example here)
  const novel = { id: novelId, name: "The Legend of Ice" };
  const book = { id: bookId, name: "Book One" };
  const chapter = { id: chapterId, name: "Chapter 1" };
  const content = "This is the dynamic content for the chapter...";

  return (
    <div className="flex flex-col items-center justify-center text-dark">
      <h1 className="text-3xl font-bold uppercase underline decoration-[#BDB76B] decoration-7 underline-offset-[1rem]">
        {novel.name}
      </h1>
      <h2 className="text-2xl font-semibold py-5">{book.name}</h2>
      <h3 className="text-xl font-semibold p-3">{chapter.name}</h3>
      <p className="text-base font-medium px-10 md:px-20 pt-5 pb-10 indent-5 text-justify">
        {content}
      </p>
      <div className="w-full max-w-3xl p-10">
        <Comments novelId={novel.id} bookId={book.id} chapterId={chapter.id} />
      </div>
    </div>
  );
};

export default SinglePostPage;
