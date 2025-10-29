export const Header = () => {
  return (
    <div className='bg-[#f8f8f8] sticky top-0 z-10'>
      <div className='container flex items-center justify-between h-20'>
        <span className='font-semibold text-xl'>SIMPLE</span>
        <div className='flex gap-8'>
          <span className='font-medium cursor-pointer hover:text-black/80'>Process</span>
          <span className='font-medium cursor-pointer hover:text-black/80'>Projects</span>
        </div>
      </div>
    </div>
  );
};
