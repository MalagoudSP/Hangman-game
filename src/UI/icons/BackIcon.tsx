function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className} h-[16.17px] w-[17.45] md:h-[25.87px] md:w-[27.91px] lg:h-[39px] lg:w-[41px]`}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="39"
      fill="none"
      viewBox="0 0 41 39"
    >
      <path
        fill="#fff"
        d="M0 19.5 19.02.5v12.244C26.348 12.744 41 17.896 41 38.5c0-11.147-14.653-13.37-21.98-13.089V38.5L0 19.5Z"
      />
    </svg>
  );
}

export default BackIcon;
