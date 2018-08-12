import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {closeModal} from "./modalActions";
import { withRouter } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';

const actions = {closeModal};

class LoginModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Login to SCW
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginPage />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(LoginModal);