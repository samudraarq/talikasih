import React, {useState} from 'react';
import Modal from 'react-modal';
import styles from './ModalLogin.module.css';

Modal.setAppElement('#root')
export default function ModalLogin(props) {
    return (
        <div>
            <Modal 
            isOpen={props.modalIsOpen} 
            onRequestClose={() => props.openModal(false)}
            portalClassName={styles.ReactModalPortal}
            className={styles.modal_wrapper} >
                <div>
                    <h1>
                    LOGIN
                    </h1>
                    <h3>
                    New user? Create an account
                    </h3>
                </div>
                <div>
                <input type="text" placeholder="E-mail"></input>
                <input type="password" placeholder="Password"></input>
                <h3>Forgot password?</h3>
                </div>
                <div>
                <button>LOGIN</button>
                <span>Continue with Google</span>
    
                </div>
            </Modal>
            
        </div>
    )
}
