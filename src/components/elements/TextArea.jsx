const TextArea = ({ name, rows, placeholder, children, onChange }) => {
    return (
        <textarea
            name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={onChange}
            className="text-sm border rounded-lg w-full py-3 px-3 text-slate-700 placeholder:opacity-50"
        >{children}</textarea>
    );
}

export default TextArea;