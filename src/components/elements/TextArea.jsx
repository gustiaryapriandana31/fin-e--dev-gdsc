const TextArea = ({ name, rows, placeholder, children, onChange }) => {
    return (
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        className="text-sm rounded-lg w-full py-3 px-3 text-slate-900 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        {children}
      </textarea>
    );
}

export default TextArea;