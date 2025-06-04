import clsx from "clsx";
import { downloadStores } from "./downloadData";
import QRCode from "./QRCode";

export default function QRCodeSection() {
  return (
    <div className={clsx("flex", "gap-4", "lg:gap-6")}>
      {downloadStores.map((store, index) => (
        <QRCode key={index} store={store} />
      ))}
    </div>
  );
}
