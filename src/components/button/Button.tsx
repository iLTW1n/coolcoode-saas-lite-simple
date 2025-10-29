type Props = {
  children: React.ReactNode;
  size?: 'large';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, size, className, ...rest } = props;

  return (
    <button
      className={`
        cursor-pointer
        text-sm
        font-semibold
        bg-[#b2ff42]
        rounded-lg
        hover:bg-[#a1e237] transition
        ${size === 'large' ? 'px-10 py-3' : 'px-6 py-2'}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
