const Label = ({htmlFor, children, addedClassName}) => {
    return (
      <label
        htmlFor={htmlFor}
        className={`block text-slate-700 font-bold md:text-lg md:mb-2 mb-3 ${addedClassName}`}
      >
        {children}
      </label>
    );
}  

export default Label;