const Input = ({type, name, placeholder, onChange}) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-sm rounded-lg w-full py-3 px-3 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-600"
        onChange={onChange}
      />
    );
};

export default Input;