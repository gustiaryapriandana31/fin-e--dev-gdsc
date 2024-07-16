const Article = ({ article, addedClassName, handleDisplayArticle, dataDonut }) => {
  return (
    <article
      className={`article p-4 font-poppins absolute ${addedClassName} bg-slate-800 text-white border-2 rounded-lg md:w-1/5 md:bg-white/70 md:text-black ${
        article ? "block" : "hidden"
      }`}>
      <h1
        className="close cursor-pointer float-right bg-orange-600 text-white w-6 h-6 text-center rounded-full"
        onClick={handleDisplayArticle}>
        X
      </h1>
      <h4 className="text-center font-bold text-md text-amber-700 mb-2 font-poppins">
        {dataDonut.title}
      </h4>
      <p className="text-sm">{dataDonut.article}</p>
    </article>
  );
};

export default Article;
