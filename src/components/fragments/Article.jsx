const Article = ({ article, addedClassName, handleDisplayArticle, dataDonut }) => {
  return (
    <article
      className={`article md:p-4 p-px font-poppins absolute ${addedClassName} bg-slate-800 text-white border-2 rounded-lg md:w-1/5 w-1/2 bg-white/70 md:text-black ${
        article ? "block" : "hidden"
      }`}>
      <h1
        className="close cursor-pointer m-px float-right bg-orange-600 text-white md:w-6 md:h-6 w-4 h-4 text-center md:text-sm text-xs rounded-full"
        onClick={handleDisplayArticle}>
        X
      </h1>
      <h4 className="text-center font-bold md:text-md text-sm text-amber-700 mb-2 font-poppins">
        {dataDonut.title}
      </h4>
      <p className="hidden md:block text-sm">{dataDonut.article}</p>
    </article>
  );
};

export default Article;
