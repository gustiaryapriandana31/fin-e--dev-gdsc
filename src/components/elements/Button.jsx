const Button = ({addedClassname, children, disabled, onClick}) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg text-white outline-none focus:outline-none focus:outline-orange-200 ${addedClassname}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
