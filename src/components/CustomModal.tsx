import { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { getMaticBalances } from "../utils";

export const CustomModal = (props: any) => {
  const {
    setShow,
    show,
    count,
    emailText,
    setInterval,
    interval,
    recipientGroup,
    provider,
  } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSendEveryMinutes = () => {
    setInterval(10); // every fifteen minutes
  };

  const handleSendToFiltered = async () => {
    console.log(recipientGroup, "recip group");
    const filteredWallets = await getMaticBalances(
      recipientGroup.group.recipientAddresses,
      provider
    );
    console.log(filteredWallets, "FILTERED WALLETS");
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
          <p>Emails sent: {count}</p>
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
