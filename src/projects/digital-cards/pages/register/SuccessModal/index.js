import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

const SuccessModal = props => (
  <Modal open={props.open} onClose={() => {}}>
    <div className="successModal">
      <h2 className="title">Usuario Creado!</h2>
      {props.data.name}, tu usuario ha sido creado con éxito! Te hemos enviado un mail de confirmación a{' '}
      {props.email}
      <style jsx>
        {`
          .successModal {
            width: 80%;
            margin: 20px 0 0 10%;
            background-color: #ebebeb;
            outline: none;
            border-radius: 5px;
            box-shadow: 0px 5px 10px whitesmoke;
          }
        `}
      </style>
    </div>
  </Modal>
);

SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default SuccessModal;
