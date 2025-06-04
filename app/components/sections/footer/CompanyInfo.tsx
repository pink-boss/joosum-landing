import clsx from "clsx";
import { companyInfo, socialLinks } from "./footerData";
import SocialIcon from "./SocialIcon";

export default function CompanyInfo() {
  return (
    <div
      className={clsx(
        "w-full border-t border-text-10",
        "px-5 py-8",
        "md:px-20 md:py-12",
        "lg:px-24 lg:pt-12 lg:pb-24"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className={clsx("md:flex md:justify-between md:items-start")}>
          <div className={clsx("mb-5", "md:mb-0")}>
            <h4
              className={clsx(
                "font-semibold text-black",
                "text-base mb-1",
                "md:text-base md:mb-2",
                "lg:text-[16px] lg:mb-1"
              )}
            >
              {companyInfo.name}
            </h4>
            <p
              className={clsx(
                "text-neutral-500",
                "text-sm",
                "md:text-xs",
                "lg:text-[16px]"
              )}
            >
              {companyInfo.copyright}
            </p>
          </div>

          <div
            className={clsx(
              "mb-4",
              "md:mb-0 md:flex-1 md:text-center",
              "lg:text-right lg:flex-none"
            )}
          >
            <div
              className={clsx(
                "flex items-center gap-2",
                "justify-start",
                "md:mb-3 md:justify-end",
                "lg:mb-2"
              )}
            >
              <span
                className={clsx(
                  "font-semibold text-black",
                  "text-base",
                  "md:text-base",
                  "lg:text-[16px]"
                )}
              >
                Contact:
              </span>
              <span
                className={clsx(
                  "text-neutral-600",
                  "text-base",
                  "md:text-base",
                  "lg:text-[16px]"
                )}
              >
                {companyInfo.contact}
              </span>
            </div>
            <div className={clsx("flex gap-4 justify-end", "lg:gap-4")}>
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
