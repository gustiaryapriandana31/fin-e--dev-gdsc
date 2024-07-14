const Button = ({addedClassname, children, disabled}) => {
  return (
    <button
      className={`mt-8 px-6 py-2 rounded-lg text-white focus:outline-none focus:outline-orange-200 ${addedClassname}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
