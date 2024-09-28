
const Button = ({ onClick, disabled, text, bgColor = "bg-blue-500", textColor = "text-white" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold ${bgColor} ${textColor} ${disabled ? "opacity-50" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
