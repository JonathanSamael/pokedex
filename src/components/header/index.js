import { Header } from "./header.styled";

export const Header = (props) => {
  return <Header {...props}>{props.children}</Header>;
};
