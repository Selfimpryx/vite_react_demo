// import './index.scss';
// import style from './index2.module.scss';
// import styled from "styled-components";
import React from 'react';
import styled from '@emotion/styled';

const HeaderStyled = styled.div`
  color: blue;
`;

export function Header() {
  return (
    /* <div >header</div> */
    <HeaderStyled>header</HeaderStyled>
  );
}
