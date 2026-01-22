const Comment = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <img
          src="userImg"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">User</span>
        <span className="text-sm text-gray-500">Date</span>
      </div>
      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus
          repellendus, ad vitae quasi harum sint ducimus hic, deserunt iste
          eveniet quia, aspernatur nihil rerum quidem quis animi magni repellat.
        </p>
      </div>
    </div>
  );
};
export default Comment;
