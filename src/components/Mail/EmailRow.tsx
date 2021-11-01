import { Checkbox, IconButton } from "@mui/material";
import React, { ReactElement } from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { selectMail } from "../../features/mailSlice";

interface Props {
  id: string;
  key: string;
  title: string;
  subject: string;
  description: string;
  time: string;
}

function EmailRow({
  id,
  key,
  title,
  subject,
  description,
  time,
}: Props): ReactElement {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />

        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <div onClick={openMail} className="emailRow__mailDetails">
        <h3 className="emailRow__title">{title}</h3>

        <div className="emailRow__message">
          <h4>
            {subject}{" "}
            <span className="emailRow__description">- {description}</span>
          </h4>
        </div>

        <div className="emailRow__time">{time}</div>
      </div>
    </div>
  );
}

export default EmailRow;
