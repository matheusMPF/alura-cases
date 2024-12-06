interface ButtonProps {
  iconStart?: React.ReactNode;
  children: string;
  iconFinaly?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { iconStart, children, iconFinaly } = props;
  return (
    <div className="cursor-pointer flex items-center justify-center bg-primary-400 shadow-sm rounded-md px-8 py-2 text-white transition-colors hover:bg-primary-600">
      {iconStart}
      <button className="bg-transparentr">{children}</button>
      {iconFinaly}
    </div>
  );
};

export default Button;
