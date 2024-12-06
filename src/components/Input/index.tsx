interface InputProps {
  iconStart?: React.ReactNode;
  type: string;
  placeholder: string;
  iconFinaly?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const { iconStart, type, placeholder, iconFinaly } = props;
  return (
    <div className="flex items-center w-full border border-neutral-300 bg-white rounded-lg shadow-sm">
      {iconStart}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-gray-700 bg-transparent rounded-md  outline-none focus:outline-none"
      />
      {iconFinaly}
    </div>
  );
};

export default Input;
