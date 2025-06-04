import Image from "next/image";
import { downloadStores } from "./downloadData";

export default function MobileDownloadButtons() {
  return (
    <div className="flex gap-4 md:hidden">
      {downloadStores.map((store, index) => (
        <Image
          key={index}
          src={store.download}
          alt={`Download Button ${index + 1}`}
          width={144}
          height={48}
        />
      ))}
    </div>
  );
}
