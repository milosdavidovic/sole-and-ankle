import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Icon from "../Icon";

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => child.props.value === value);

  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <NativeSelect value={value} {...delegated}>
        {children}
      </NativeSelect>
      <VisibleBit>
        <Label>{displayedValue}</Label>
        <Chevron id="chevron-down" />
      </VisibleBit>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  width: 100%;
  background-color: ${COLORS.gray[300]};
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: max-content;
`;

const Label = styled.span`
  margin-right: 32px;
`;

const VisibleBit = styled.div`
  display: inline-block;
  pointer-events: none;
  padding: 4px 16px;
  background-color: ${COLORS.gray[100]};
  border-radius: 8px;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 4px;
  top: 4px;
`;

export default Select;
