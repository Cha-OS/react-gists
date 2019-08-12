import React from "react";

import StyledClassNames from "./ClassNames";
import ClassesNesting from "./ClassesNesting";
import ClassesShorthand from "./ClassesShorthand";
import ClassesState from "./ClassesState";
import InlineStyle from "./InlineStyle";
import DynamicCSS from "./DynamicCSS";
import CustomizedDialogDemo from "./CustomizedDialog";

export default function CustomizingComponents() {
  return (
    <div className="demo">
      CustomizingComponents
      <div className="demo">
        StyledClassNames
        <StyledClassNames />
      </div>
      <div className="demo">
        ClassesNesting
        <ClassesNesting />
      </div>
      <div className="demo">
        ClassesShorthand
        <ClassesShorthand />
      </div>
      <div className="demo">
        ClassesState
        <ClassesState />
      </div>
      <div className="demo">
        InlineStyle
        <InlineStyle />
      </div>
      <div className="demo">
        DynamicCSS
        <DynamicCSS />
      </div>
      <div className="demo">
        CustomizedDialog
        <CustomizedDialogDemo />
      </div>
    </div>
  );
}
