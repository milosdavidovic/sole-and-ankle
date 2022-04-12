import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const Breadcrumbs = () => {
  return (
    <div>
      <Link>Home</Link>
      <Link>Sale</Link>
      <Link>Shoes</Link>
    </div>
  );
};

const Wrapper = styled.div``;

const Link = styled.a`
  font-weight: 500;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};

  &:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
    color: ${COLORS.gray[500]};
  }
`;

export default Breadcrumbs;
