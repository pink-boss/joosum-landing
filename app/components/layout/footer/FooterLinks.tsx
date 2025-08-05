"use client";

import clsx from "clsx";
import Link from "next/link";
import { footerLinks } from "./footerData";
import { sendGTMEvent } from "@next/third-parties/google";

export default function FooterLinks() {
  const handleLinkClick = (titleUpper: string) => {
    switch (titleUpper) {
      case "개인정보":
        sendGTMEvent({
          event: "click",
          value: "click.detailPrivacyPolicy_footer_landing",
        });
        break;
      case "서비스":
        sendGTMEvent({
          event: "click",
          value: "click.agreeTermsOfService_footer_landing",
        });
        break;
      case "이용문의":
        sendGTMEvent({ event: "click", value: "click.contact_footer_landing" });
        break;
      case "공지사항":
        sendGTMEvent({ event: "click", value: "click.notice_footer_landing" });
        break;
    }
  };

  return (
    <div
      className={clsx(
        "w-full border-t border-text-10",
        "px-5",
        "md:px-8",
        "lg:px-16"
      )}
    >
      <div
        className={clsx(
          "flex flex-wrap justify-around",
          "text-xs py-4",
          "md:py-5, md:text-sm",
          "lg:py-3"
        )}
      >
        {footerLinks.map((link, index) =>
          "titleUpper" in link ? (
            <Link
              key={index}
              href={link.href}
              className={clsx("text-black text-center my-auto flex-1")}
              target={link.newTab ? "_blank" : undefined}
              onClick={() => handleLinkClick(link.titleUpper)}
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
