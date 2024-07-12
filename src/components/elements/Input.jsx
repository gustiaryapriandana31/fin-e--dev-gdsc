const Input = ({type, name, placeholder, onChange}) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-sm border rounded-lg w-full py-3 px-3 text-slate-700 placeholder:opacity-50"
        onChange={onChange}
      />
    );
};

export default Input;