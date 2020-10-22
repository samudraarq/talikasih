import React from 'react';
import Modal from 'react-modal';
import styles from './ModalLogin.module.css';
import FormLogin from './FormLogin';
import FormReg from './FormReg';
import img1 from '../../assets/homepage/Home/Modal/Ellipse 2.svg';
import img2 from '../../assets/homepage/Home/Modal/Ellipse 3.svg';
import img3 from '../../assets/homepage/Home/Modal/Ellipse1.svg';


Modal.setAppElement('#root')
export default function ModalLogin(props) {
  
   
    return (
        <div>
            <Modal 
            isOpen={props.modalIsOpen} 
            onRequestClose={() => props.openModal(false)}
            portalClassName={styles.ReactModalPortal}
            className={styles.modal_wrapper} >
             {props.isLogin ?
             <FormLogin setIsLogin={props.setIsLogin}/> :  
             <FormReg setIsLogin={props.setIsLogin}/> }
             <img src={img1} alt="styleModal" className={styles.img1}/>
             <img src={img2} alt="styleModal" className={styles.img2}/>
             <img src={img3} alt="styleModal" className={styles.img3}/>
            </Modal>
            
        </div>
    )
}
