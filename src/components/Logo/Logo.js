import React from "react";
import styled from "styled-components/macro";

export const Logo = ({ text, ...rest }) => {
  return <StyledLogo {...rest}>{text}</StyledLogo>;
};

const StyledLogo = styled.span`
  font-weight: 800;
  font-size: ${24 / 16}rem;
`;

export default Logo;
