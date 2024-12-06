import Link from "next/link";
import React from "react";

const maiorq = ">";

export const LinkFAQ = () => {
  return (
    <Link href="/faq">
      <div className="text-primary-600 text-[12px] flex gap-2 items-center">
        <span className="bg-primary-100 rounded-xl px-2 py-[2px]">
          O que tem de novo?
        </span>
        <span>Confira as principais dúvidas {maiorq}</span>
      </div>
    </Link>
  );
};
