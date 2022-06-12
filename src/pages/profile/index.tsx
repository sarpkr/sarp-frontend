/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

const container = css``;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Profile = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      profile
    </div>
  );
};

export default Profile;
