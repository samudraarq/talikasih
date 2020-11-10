// import { Form } from 'formik'
import React, { useState } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import moment from "moment";
import { postShare } from "../../../redux/actions/donorActions";
import setImage from "../../../assets/CampingDetails/Vector.png";
import setImage2 from "../../../assets/CampingDetails/Vector-1.png";
import CampaignUpdate from "../CampaignUpdate/CampaignUpdate";
import styles from "./CampaignDetailsDonateBigCard.module.css";
import {
  setModalOpen,
  setFormLogin,
} from "../../../redux/actions/layoutActions";

const CampaignDetailsDonateBigCard = ({
  dataDonorAll,
  postShare,
  userdata,
  setModalOpen,
  setFormLogin,
}) => {
  // variabel

  const [open, setOpen] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  let idUser = userdata?.user?.id;
  let token = userdata?.token;
  // MODAL //
  const requestClose = () => setOpen(false);
  const openModal = () => setOpen(true);
  const requestShareClose = () => setOpenShare(false);
  const setShareOpen = () => setOpenShare(true);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0",
      transform: "translate(-50%, -50%)",
      overlay: {
        background: "black",
      },
    },
  };

  const openModalLogin = () => {
    setModalOpen();
    setFormLogin();
  };

  const openModalShare =()=>{
    postShare(idDonate); 
    setShareOpen();
  }

  const copyToClipboard=()=> {
    postShare(idDonate); 
    let textBox = document.getElementById("myvalue");
    textBox.select();
    document.execCommand("copy");
}
  Modal.setAppElement("#root");

  // useEffect //

  let idUserFromChamping = dataDonorAll.dataDonate.UserId;
  let progress =
    (dataDonorAll.dataDonate.raised / dataDonorAll.dataDonate.goal) * 100;
  let progress2 = dataDonorAll.dataDonate.raised - dataDonorAll.dataDonate.goal;
  let lebih = 0;
  let donationCountData = 0;
  let shareCountData = 0;
  // variabel show camping sendiri
  let userSama = false;
  //Variabel end
  if (idUser === idUserFromChamping) {
    userSama = true;
  } else {
    userSama = false;
  }

  // hendel progres bar
  if (progress >= 100) {
    lebih = `${progress2} (${progress - 100}%)`;
    progress = 100;
  }
  // hendel progres bar end

  // hendel count share
  if (dataDonorAll.dataDonate.shareCount != null) {
    shareCountData = dataDonorAll.dataDonate.shareCount;
  }
  // hendel count share end
  // hendel data donate
  if (dataDonorAll.dataDonate?.donationCount != null) {
    donationCountData = dataDonorAll.dataDonate?.donationCount;
  }
  // hendel data donate end
  let { idDonate } = useParams();
  // count Day left
  let now = moment(new Date()); //todays date
  let end = moment(`${dataDonorAll.dataDonate.due_date}`); // another date
  let duration = moment.duration(now.diff(end));
  let days = duration.asDays();
  let dayleft = Math.abs(parseInt(days));
  // let dayleft = toString(dayleftint);
  // count day left end
  return (
    <>
    <div className={styles.container}>
      <div className={styles.cardHead}>
        <h1>{dataDonorAll.dataDonate.title}</h1>
        {userSama ? (
          <>
            <div className={styles.dropwarp}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  <img className={styles.roda} src={setImage} alt="user"></img>
                  <img
                    className={styles.arrow}
                    src={setImage2}
                    alt="user2"
                  ></img>
                </button>
                <div className={styles.dropdowncontent}>
                  <span>Edit</span>
                  <span>Close Campaign</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
        
      </div>
      </div>

      <div className={styles.container}>
        <div className={styles.cardKiri}>
          <img src={dataDonorAll.dataDonate.header_img} alt="user3"></img>
        </div>
        <div className={styles.cardKanan}>
          <h1>
            <NumberFormat
              value={dataDonorAll.dataDonate.raised}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"IDR "}
            />
          </h1>
          <h4>
            from 
            <NumberFormat className={styles.goal}
              value={dataDonorAll.dataDonate.goal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" IDR "}
              
            />   
              goal
          </h4>
          <div className={styles.progress}>
            <div
              className={styles.progressDone}
              style={{ width: `${progress}%`, opacity: "1" }}
            ></div>
          </div>
          {lebih >= 0 ? (
            ""
          ) : (
            <>
            <h3>
            
            <NumberFormat
              value={lebih}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"  IDR "}
              decimalScale={0}
            />
            </h3>
            <br/>
            <br/>
            </>
          )}

          <div className={styles.profilContainer}>
            <div className={styles.profilWraper}>
            <img src={dataDonorAll.dataDonate?.User?.photo} alt="user4"></img>
            <div className={styles.profilName}>
              <h3>{dataDonorAll.dataDonate?.User?.name}</h3>
              <h4>Fundraiser</h4>
              {userSama ? (
                <span className={styles.cekStatus}>Check status</span>
              ) : (
                ""
              )}
            </div>
            </div>
            <div className={styles.dataCount}>
              <div>
                <h1>{!isNaN(dayleft) && dayleft}</h1>
                <p>Days left</p>
              </div>
              <div>
                <h1>{donationCountData}</h1>
                <p>Donations</p>
              </div>
              <div>
                <h1>{shareCountData}</h1>
                <p>Share</p>
              </div>
            </div>

            <button
              onClick={openModalShare }
              className={styles.btnShare}
            >
              SHARE
            </button>

            {userSama ? (
              <button className={styles.btnDonate} onClick={openModal}>
                NEW PROGRESS
              </button>
            ) : token === "" ? (
              <button onClick={openModalLogin} className={styles.btnDonate}>
                DONATE
              </button>
            ) : (
              <Link to={`/donate/${dataDonorAll.dataDonate.id}`}>
                <button className={styles.btnDonate}>DONATE</button>
              </Link>
            )}

            <Modal
              isOpen={open}
              shouldCloseOnOverlayClick={false}
              onRequestClose={requestClose}
              overlayClassName={styles.overlay}
              bodyOpenClassName={styles.body}
              portalClassName={styles.portal}
              // style={customStyles}
              className={styles.modalStyle}
            >
              <CampaignUpdate setOpen={setOpen} requestClose={requestClose} />
            </Modal>

            <Modal
              isOpen={openShare}
              shouldCloseOnOverlayClick={false}
              onRequestClose={requestShareClose}
              style={customStyles}
            >


              <div className={styles.modalShare}>
                <div className={styles.modalShareHead}>
                  <h1>Help by Sharing</h1> <button className={styles.btnColseShare} onClick={requestShareClose}><b>X</b></button>
                </div>
                <div className={styles.modalShareBody}>
                    <input className={styles.inputShareClick} name="myvalue"  id="myvalue" type="text" value={window.location}/>
                    <button className={styles.btnShareClick}  onClick={copyToClipboard}>Copy Link</button>
                </div>
              </div>

              
            </Modal>

          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postShare: (idDonate) => dispatch(postShare(idDonate)),
  setModalOpen: () => dispatch(setModalOpen()),
  setFormLogin: () => dispatch(setFormLogin()),
});

const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
  userdata: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailsDonateBigCard);
