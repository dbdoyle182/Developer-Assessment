import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from "./modalActions";
import ChangePasswordPage from "../../pages/ChangePassword/ChangePasswordPage";

const actions = {closeModal};

class PasswordModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    ChangePassword
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <ChangePasswordPage />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(PasswordModal);