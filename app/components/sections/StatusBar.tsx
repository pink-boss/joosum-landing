import { memo } from "react";
import clsx from "clsx";

function StatusBar() {
  return (
    <div
      className={clsx(
        "w-full h-11 bg-white flex items-center justify-between px-4",
        "md:hidden"
      )}
    >
      <div className="text-sm font-medium">9:41</div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-black rounded-sm"></div>
        <div className="w-4 h-2 bg-black rounded-sm"></div>
        <div className="w-6 h-2 bg-black rounded-sm"></div>
      </div>
    </div>
  );
}

export default memo(StatusBar);
