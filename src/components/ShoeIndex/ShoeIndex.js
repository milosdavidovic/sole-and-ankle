import React, { useState } from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import ShoeCard from "../ShoeCard";
import Spacer from "../Spacer";
import data from "../../data.js";

const ShoeIndex = () => {
  const [sortId, setSortId] = useState("newest");

  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs />
        <LinksWrapper>
          <LinkNav>Lifestyle</LinkNav>
          <LinkNav>Jordan</LinkNav>
          <LinkNav>Running</LinkNav>
          <LinkNav>Basketball</LinkNav>
          <LinkNav>Training & Gym</LinkNav>
          <LinkNav>Football</LinkNav>
          <LinkNav>Skateboarding</LinkNav>
          <LinkNav>American Football</LinkNav>
          <LinkNav>Baseball</LinkNav>
          <LinkNav>Golf</LinkNav>
          <LinkNav>Tennis</LinkNav>
          <LinkNav>Athletics</LinkNav>
          <LinkNav>Walking</LinkNav>
        </LinksWrapper>
      </LeftColumn>
      <MainColumn>
        <MainHeader>
          <Title>Jordan</Title>
          <SortSection>
            <span>Sort</span>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortSection>
        </MainHeader>
        <Spacer size={36} />
        <ShoeList>
          {data.map((shoe) => (
            <ShoeItem key={shoe.name}>
              <ShoeCard {...shoe} />
            </ShoeItem>
          ))}
        </ShoeList>
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 500px;
`;

const LeftColumn = styled.div`
  flex: 1 1 200px;
`;

const MainColumn = styled.div`
  flex: 10;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: ${24 / 16}rem;
`;

const SortSection = styled.section`
  display: flex;
  align-items: baseline;
  padding: 0 8px;
  gap: 8px;
  font-weight: 500;
  font-size: 1rem;
  color: ${COLORS.gray[700]};
`;

const ShoeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ShoeItem = styled.div`
  flex: 1 0 300px;
`;

const LinksWrapper = styled.div`
  margin-top: 36px;
`;

const LinkNav = styled.a`
  font-weight: 600;
  font-size: 1rem;
  display: block;
  padding: 4px 0;
  cursor: pointer;

  &:active,
  &:hover {
    color: ${COLORS.secondary};
  }
`;

export default ShoeIndex;
