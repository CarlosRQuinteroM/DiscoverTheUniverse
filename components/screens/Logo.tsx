/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";


const Logo = () => {
  return (
    <div
      css={css`
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 2em;
        background-color: transparent;
      `}
    >
      <Image src="/images/logo.png" alt=" Logo" width={134} height={39} />
    </div>
  );
};

export default Logo;
