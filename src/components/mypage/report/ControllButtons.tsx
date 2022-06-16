import React from 'react';
import styled from 'styled-components';

import palette from '../../../styles/palette';

type PropType = {
  onCancelClick: () => void;
  onAgreeClick: () => void;
  activeText: string;
};

const ControllButtons = ({
  onCancelClick,
  onAgreeClick,
  activeText,
}: PropType) => {
  return (
    <Container>
      <CancelButton onClick={onCancelClick}>취소</CancelButton>
      <CompleteButton onClick={onAgreeClick}>{activeText}</CompleteButton>
    </Container>
  );
};

export default ControllButtons;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CompleteButton = styled.button`
  width: 60%;

  background: ${palette.mainOrange};
  color: #fff;

  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  padding: 6px;
  margin: 0 auto;
`;

const CancelButton = styled.button`
  width: 40%;

  background-color: ${palette.bgGray};
  border-radius: 10px;

  outline: none;
  border: none;
  cursor: pointer;

  padding: 6px;
  margin: 0 auto;
`;
