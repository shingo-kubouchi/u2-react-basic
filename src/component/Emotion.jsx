/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  const Button = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- emotion -</p>
      <Button>FIGHT!</Button>
    </div>
  );
};
