import clsx from "clsx";
import Link from "next/link";
import { footerLinks } from "./footerData";

export default function FooterLinks() {
  return (
    <div
      className={clsx(
        "w-full border-t border-text-10",
        "px-5 py-4",
        "md:px-8 md:py-5",
        "lg:px-16 lg:py-3"
      )}
    >
      <div
        className={clsx(
          "flex flex-wrap justify-around",
          "text-xs",
          "md:text-sm",
          ""
        )}
      >
        {footerLinks.map((link, index) =>
          "titleUpper" in link ? (
            <Link
              key={index}
              href={link.href}
              className={clsx("text-black text-center my-auto")}
              target={link.newTab ? "_blank" : undefined}
            >
              <span className="hidden lg:block">{link.titleUpper}</span>
              <span className="block lg:hidden">
                <p>{link.titleUpper}</p>
                <p>{link.titleLower}</p>
              </span>
            </Link>
          ) : (
            <div
              key={index}
              className={clsx("w-px h-5 bg-text-10", "md:h-10", "lg:h-5")}
            />
          )
        )}
      </div>
    </div>
  );
}
