import styles from "./Button.module.css";

interface Props {
  type?:
    | "primary" //use typescript to limit values
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light";
  children?: string; //set property as optional
  enabled?: boolean;
  onButtonClick: () => void;
}
const Button = ({
  type = "primary",
  children = "Button",
  enabled = true,
  onButtonClick,
}: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + type]].join(" ")}
      disabled={!enabled}
      onClick={() => {
        onButtonClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
