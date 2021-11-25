import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <>
      <MobileBar />
      <Wrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Wrapper>
    </>
  );
};

const MobileBar = styled.div`
  display: none;
  background-color: var(--gray-900-color);
  width: 100%;
  height: 4px;

  @media ${QUERIES.phoneAndDown} {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--gray-300-color);
  background-color: var(--gray-900-color);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  color: var(--white-color);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
