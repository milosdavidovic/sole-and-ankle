import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import { formatPrice, isNewShoe } from "../../utils";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const PriceComponent = salePrice ? OldPrice : DefaultPrice;

  const promo = salePrice ? (
    <SalePromo>Sale</SalePromo>
  ) : isNewShoe(releaseDate) ? (
    <NewReleasePromo>Just Released!</NewReleasePromo>
  ) : null;

  return (
    <Wrapper>
      <Image src={imageSrc} />
      <SplitBox>
        <StrongText>{name}</StrongText>
        <PriceComponent>{formatPrice(price)}</PriceComponent>
      </SplitBox>
      <SplitBox>
        {numOfColors} colors
        {salePrice && <NewPrice>{formatPrice(salePrice)}</NewPrice>}
      </SplitBox>
      {promo}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Promo = styled.div`
  position: absolute;
  top: 8px;
  right: -8px;
  padding: 4px;
  font-size: ${14 / 16}rem;
  color: white;
`;

const SalePromo = styled(Promo)`
  background-color: ${COLORS.primary};
`;

const NewReleasePromo = styled(Promo)`
  background-color: ${COLORS.secondary};
`;

const SplitBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StrongText = styled.span`
  color: ${COLORS.gray[900]};
  font-weight: 600;
  white-space: nowrap;
`;

const DefaultPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const OldPrice = styled(DefaultPrice)`
  text-decoration: line-through;
  font-weight: 500;
`;

const NewPrice = styled(DefaultPrice)`
  color: ${COLORS.primary};
  font-weight: 500;
`;

export default ShoeCard;
