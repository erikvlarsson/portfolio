import React from "react";
import "../App.css";

export default function MobileHeader({ pageIndex, setPageIndex }) {
  const links = ["Burger"];
  return (
    <div className="mobile-header">
      <div>MObile Heeader</div>
      {links.map((link, i) => {
        return (
          <div
            className={
              pageIndex === i
                ? "header-link header-link-active"
                : "header-link header-link-default"
            }
            onClick={() => setPageIndex(i)}
          >
            {link}
          </div>
        );
      })}
    </div>
  );
}
