import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CreateDetails from './createForm/CreateDetails';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates,
  );

  return (
    <>
      <CreateInit />
      {loginModalIsClicked && <LoginModal />}
      <TabMenu />
    </>
  );
};

export default CreateTemplate;
