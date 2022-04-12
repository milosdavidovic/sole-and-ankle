import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import SearchInput from "../SearchInput";
import Logo from "../Logo";

const Header = () => {
  return (
    <div>
      <PromotionHeader>
        Free shipping on domestic orders over $75!
        <SearchInput placeholder="Search..." />
        <StyledLink href="http://localhost:3000">Help</StyledLink>
        <Icon id="shopping-bag"></Icon>
      </PromotionHeader>
      <MainHeader>
        <MainHeaderLeft>
          <Logo text="Sole&Ankle" />
        </MainHeaderLeft>
        <MainHeaderContent>
          <Link href="http://localhost:3000">SALE</Link>
          <Link href="http://localhost:3000">NEW RELEASES</Link>
          <Link href="http://localhost:3000">MEN</Link>
          <Link href="http://localhost:3000">WOMAN</Link>
          <Link href="http://localhost:3000">kids</Link>
          <Link href="http://localhost:3000">collections</Link>
        </MainHeaderContent>
        <MainHeaderRight></MainHeaderRight>
      </MainHeader>
    </div>
  );
};

const PromotionHeader = styled.div`
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  gap: 24px;
  font-weight: 500;
  font-size: ${14 / 16}rem;
  color: white;
  padding: 6px 32px;

  & > :first-child {
    margin-left: auto;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: white;
  padding: 24px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: hidden;
`;

const MainHeaderLeft = styled.div`
  flex: 1;
  min-width: 200px;
`;

const MainHeaderContent = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
  justify-content: center;
  min-width: max-content;
`;

const MainHeaderRight = styled.div`
  flex: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  text-transform: uppercase;
`;

export default Header;
