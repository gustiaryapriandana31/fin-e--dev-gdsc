const Button = ({addedClassname, children, onClick}) => {
  return (
    <button
      className={`mt-8 px-6 py-2 font-semibold rounded-lg text-white focus:outline-none focus:outline-orange-200 ${addedClassname}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
