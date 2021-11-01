import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ReactElement } from "react";
import "./Section.css";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
  selected: boolean;
}

function Section({ Icon, title, color, selected }: Props): ReactElement {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
