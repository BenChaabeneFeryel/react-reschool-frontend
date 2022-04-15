import React from 'react'
import styled from "styled-components";
import BadgeAvatars from "../../components/Avatar"
import SwipeableTemporaryDrawer from "../../components/RightSidebar"

const Head = styled.div`
 display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color:#E8E8E8;
  border-bottom:2px solid #C0C0C0;
  width:100%;
  position: fixed;
  left: 10;
  top: 0%;
  z-index: 1;
  height:43px;
  margin-left:-10px;
  transition: all .5s ease;
  cursor: pointer;

  &:focus {
      outline: none;
  }
`;

export default function Header() {
  return (
    <Head>
      <BadgeAvatars/>
      <SwipeableTemporaryDrawer/>
    </Head>
  )
}
