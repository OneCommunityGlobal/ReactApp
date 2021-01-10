import React, { useState, useEffect, useReducer } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
  CardBody,
  Card,
  Col,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditConfirmModal = (props) => {
  const { isOpen, closeModal, modalTitle, modalMessage, userProfile } = props;
  const history = useHistory();
  const toggle = () => {
    closeModal();
    history.push(`#/userprofile/${userProfile._id}`);
  };
  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{modalTitle}</ModalHeader>
        <ModalBody>{modalMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

EditConfirmModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalMessage: PropTypes.string.isRequired,
  userProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default EditConfirmModal;
