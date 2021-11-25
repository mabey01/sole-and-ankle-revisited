/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContentWrapper>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </DialogContentWrapper>
    </DialogOverlayWrapper>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  background: var(--modal-backdrop-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
`;

const DialogContentWrapper = styled(DialogContent)`
  position: relative;
  height: 100%;
  width: 80%;
  padding: 30vh 32px 32px 32px;
  background: hsl(0 100% 100%);

  box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  position: absolute;

  top: 32px;
  right: 22px;
`;

const Nav = styled.nav`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;

  color: var(--gray-900-color);
  text-decoration: none;

  &:first-of-type {
    color: var(--secondary-color);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  line-height: 0.875rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;

  text-decoration: none;
  color: var(--gray-700-color);
`;

export default MobileMenu;
