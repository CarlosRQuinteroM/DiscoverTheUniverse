/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const ReturnHome = () => {
  return (
    <Link href="/" passHref>
      <a
        css={css`
          color: white;
        `}
      >
        Return Home
      </a>
    </Link>
  );
};

export default ReturnHome;
