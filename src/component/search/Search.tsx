import React, { FunctionComponent } from "react";
import { SearchInfoSocialMedia } from "./social-media/SearchInfoSocialMedia";
import { SearchBox } from "./SearchBox";
import { Settings } from "./settings/Settings";

export const Search: FunctionComponent = () => {
  return (
    <div className="search">
      <div className="search-box-l" />
      <SearchBox />
      <div className="search-box-r" />
      <div className="search-info">
        <SearchInfoSocialMedia />
        <Settings />
      </div>
    </div>
  );
};
