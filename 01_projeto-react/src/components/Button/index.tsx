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
  // if (IconLeft) {
  //   return (
  //     <button className="btn" {...rest}>
  //       <IconLeft />
  //       <p>{children}</p>
  //     </button>
  //   )
  // }

  // if (IconRight) {
  //   return (
  //     <button className="btn" {...rest}>
  //       <p>{children}</p>
  //       <IconRight />
  //     </button>
  //   )
  // }

  return (
    <button className="btn" {...rest}>
      {/* renderização condicional */}
      {IconLeft && <IconLeft />}
      <p>{children}</p>
      {IconRight && <IconRight />}
    </button>
  );
};
