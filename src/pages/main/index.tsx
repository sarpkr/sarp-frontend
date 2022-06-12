/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

const container = css``;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Main = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      Main
    </div>
  );
};

export default Main;
