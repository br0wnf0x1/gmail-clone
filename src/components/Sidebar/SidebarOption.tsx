import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ReactElement } from "react";
import "./SidebarOption.css";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>; // specify the icon in sidebar.tsx
  title: string;
  number: number;
  selected: boolean;
}

function SidebarOption({ Icon, title, number, selected }: Props): ReactElement {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
