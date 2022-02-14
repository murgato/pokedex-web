import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "../../css/Collapsed.css";

interface Props {
  title: string;
  text: string;
  onClick?: Function;
}

const Collapsed = ({ text, title, onClick }: Props) => {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <div
        className="container-header"
        id={title}
        onClick={(e) => {
          isOpen(!open);
          onClick && onClick(e.currentTarget.id);
        }}
      >
        <label> {title} </label>
        {open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </div>
      <Collapse in={open}>
        <div>{text}</div>
      </Collapse>
    </div>
  );
};

export default Collapsed;
