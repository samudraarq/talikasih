import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setModalClose } from "../../redux/actions/layoutActions";
import styles from "./ModalLogin.module.css";
import FormLogin from "./FormLogin";
import FormReg from "./FormReg";
import img1 from "../../assets/homepage/Home/Modal/Ellipse 2.svg";
import img2 from "../../assets/homepage/Home/Modal/Ellipse 3.svg";
import img3 from "../../assets/homepage/Home/Modal/Ellipse1.svg";

Modal.setAppElement("#root");

function ModalLogin(props) {
  return (
    <div>
      <Modal
        isOpen={props.layout.modalIsOpen}
        onRequestClose={() => props.setModalClose()}
        portalClassName={styles.ReactModalPortal}
        className={styles.modal_wrapper}
      >
        {props.layout.isLogin ? <FormLogin /> : <FormReg />}
        <img src={img1} alt="styleModal" className={styles.img1} />
        <img src={img2} alt="styleModal" className={styles.img2} />
        <img src={img3} alt="styleModal" className={styles.img3} />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModalClose: () => dispatch(setModalClose()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
