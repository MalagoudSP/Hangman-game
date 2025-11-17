function CategoryItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        boxShadow: `inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff`,
      }}
      className="text-neutral-0 text-preset-10 md:text-preset-6 flex cursor-pointer items-center justify-center rounded-[20px] bg-blue-600 px-16 py-6 uppercase hover:bg-blue-500 md:rounded-[40px] md:py-3"
    >
      {children}
    </div>
  );
}

export default CategoryItem;
