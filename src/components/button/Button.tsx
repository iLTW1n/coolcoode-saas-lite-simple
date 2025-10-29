type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`
        cursor-pointer
        px-6 py-2
        text-sm
        font-semibold
        bg-[#b2ff42]
        rounded-lg
        hover:bg-[#a1e237] transition
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
