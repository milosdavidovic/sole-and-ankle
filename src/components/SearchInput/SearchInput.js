import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Icon from "../Icon";

const SearchInput = ({ placeholder }) => {
  return (
    <Wrapper>
      <StyledIcon id="search" size={16} />
      <Input type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

const Input = styled.input`
  width: 100%;
  padding-left: 24px;
  background-color: transparent;
  color: white;
  box-shadow: none;
  border: none;
  outline-offset: 5px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLORS.gray[500]};
  }
  :-ms-input-placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const Wrapper = styled.div`
  width: 200px;
  position: relative;
  border-bottom: 1px solid white;
  padding: 6px 0;

  & > input:hover {
    color: red;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  left: 4px;
  pointer-events: none;
`;

export default SearchInput;
