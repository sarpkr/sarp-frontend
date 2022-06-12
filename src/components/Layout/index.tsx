/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const container = css``;

const Layout = () => {
  return (
    <div css={container}>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
