import React from "react";

import MyCompWithStyles from "./withStylesComp.js";
import HookApi from "./HookApi";
import StyledComponents from "./StyledComponents";
import HigherOrderComponent from "./HigherOrderComponent";
import AdoptingProps from "./AdoptingProps";
import NestedStylesHook from "./NestedStylesHook";
import AdaptingHook from "./AdaptingHook";
import AdaptingStyledComponents from "./AdaptingStyledComponents";
import AdaptingHOC from "./AdaptingHOC";

export default function Basics() {
  return (
    <div className="demo">
      Basics
      <br />
      material-ui_styles-basics
      <div className="demo">
        <MyCompWithStyles />
      </div>
      <div className="demo">
        <HookApi className="demo" />
      </div>
      <div className="demo">
        <StyledComponents />
      </div>
      <div className="demo">
        <HigherOrderComponent />
      </div>
      <div className="demo">
        <NestedStylesHook />
      </div>
      <div className="demo">
        AdoptingProps
        <AdoptingProps />
      </div>
      <div className="demo">
        AdaptingHook
        <AdaptingHook />
      </div>
      <div className="demo">
        AdaptingStyledComponents
        <AdaptingStyledComponents />
      </div>
      <div className="demo">
        AdaptingHOC
        <AdaptingHOC />
      </div>
    </div>
  );
}
