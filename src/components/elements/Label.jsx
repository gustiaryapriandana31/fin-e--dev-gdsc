const Label = ({htmlFor, children}) => {
    return (
      <label
        htmlFor={htmlFor}
        className="block text-white text-lg font-bold mb-2"
      >
        {children}
      </label>
    );
}  

export default Label;