import BackIcon from "./icons/BackIcon";
import MenuIcon from "./icons/MenuIcon";

function MenuButton({ type = "menu" }: { type?: "menu" | "back" }) {
  return (
    <div
      style={{
        boxShadow: `inset 0 -6px 0 7px rgba(158, 45, 245, 0.25)`,
      }}
      className="gradient-3 flex size-10 cursor-pointer items-center justify-center rounded-full active:scale-95 md:size-16 lg:size-23.5"
    >
      {type === "back" ? <BackIcon /> : <MenuIcon />}
    </div>
  );
}

export default MenuButton;
