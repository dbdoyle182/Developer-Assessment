import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import PasswordModal from './PasswordModal';

const modalLookup = {
    LoginModal,
    SignUpModal,
    PasswordModal
}

const mapState = (state) => ({
    currentModal: state.modals
})
const ModalManager = ({currentModal}) => {
    let renderedModal;

    if (currentModal) {
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];

        renderedModal = <ModalComponent {...modalProps} />
    }
  return <span>{renderedModal}</span>
  
}

export default connect(mapState)(ModalManager)
