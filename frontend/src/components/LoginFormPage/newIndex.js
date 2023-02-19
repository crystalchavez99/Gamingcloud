// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginFormPage from './index';
import index from './index';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="border border-white bg-dark" style={{color: "white"}}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginFormPage />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
