import { ButtonHTMLAttributes } from "react";
import { Icon } from "../../utils/icons";
import "./styles.css";

type ButtonProps = {
  IconLeft?: Icon;
  IconRight?: Icon;
};

export const Button = ({
  IconLeft,
  IconRight,
  children,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="btn" {...rest}>
      {IconLeft ? <IconLeft /> : ""}
      <p>{children}</p>
      {IconRight ? <IconRight /> : ""}
    </button>
  );
};
