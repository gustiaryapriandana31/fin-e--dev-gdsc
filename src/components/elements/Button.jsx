const Button = ({addedClassname, children}) => {
  return (
    <button
      className={`mt-8 px-6 py-2 font-semibold rounded-lg text-white ${addedClassname}`}
    >
      {children}
    </button>
  );
};

export default Button;
