import PlayIcon from "./icons/PlayIcon";

function PlayButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center active:scale-95 ${className}`}
    >
      <div
        style={{
          boxShadow: `inset 0 -4px 0 5px #243041,
                    inset 0 -12px 0 11px #9d2df5`,
        }}
        className="gradient-3 flex size-40 cursor-pointer items-center justify-center rounded-full md:size-50"
      >
        <PlayIcon />
      </div>
    </button>
  );
}

export default PlayButton;
