import { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";

export const CustomModal = (props: any) => {
  const { setShow, show, emailText, setInterval, interval } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSendEveryMinutes = () => {
    setInterval(10); // every fifteen minutes
  };

  const handleSendToFiltered = () => {
    //set a filter here for the wallet addresses that is passed in thru props
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <button
          type="button"
          className="btn btn-secondary handle-close"
          onClick={handleClose}
        >
          Close
        </button>

        <div className="modal-header-text title my-5">SELECT EMAIL OPTION</div>
        <div className="modal-body justify-center align-center text-center">
          <div className="line"></div>
          <p className="p-2">
            Select how you want to send the email with these two options:
          </p>
          <button
            className="btn btn-secondary m-5"
            onClick={handleSendEveryMinutes}
          >
            Send every 15 minutes
          </button>
          <button className="btn btn-secondary" onClick={handleSendToFiltered}>
            Send only to wallet addresses with more than 15 MATIC
          </button>

          <div className="line"></div>
        </div>
      </Modal>
    </>
  );
};
