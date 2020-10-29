// import { Form } from 'formik'
import React, { useState, useEffect } from "react";
import styles from "./CampaignDetailsDonateBigCard.module.css";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { postShare } from "../../../redux/actions/donorActions";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import setImage from "../../../assets/CampingDetails/Vector.png";
import setImage2 from "../../../assets/CampingDetails/Vector-1.png";
import moment from "moment";

const CampaignDetailsDonateBigCard = ({ dataDonorAll, postShare }) => {
  // variabel
  const [idUser, setidUser] = useState(0);

  useEffect(() => {
    const getuserdata = (dataDonorAll) => {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJhbmpheWxhaCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjAzNDU4NjcyfQ.7ioPqnX60T1vi9gw8tUyX6J7VyGq5v3l7SPqRWyQgi0";
      let config = {
        method: "get",
        url: `https://warm-tundra-23736.herokuapp.com/formuser`,
        headers: {
          token: token,
        },
      };

      axios(config)
        .then(function (response) {
          setidUser(response.data.user.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getuserdata();
  }, []);
  let idUserFromChamping = dataDonorAll.dataDonate.UserId;
  let progress =
    (dataDonorAll.dataDonate.raised / dataDonorAll.dataDonate.goal) * 100;
  let progress2 = dataDonorAll.dataDonate.raised - dataDonorAll.dataDonate.goal;
  let lebih = "";
  let donationCountData = 0;
  let shareCountData = 0;
  // variabel show camping sendiri
  let userSama = false;
  //Variabel end
  if (idUser === idUserFromChamping) {
    let userSama = true;
  } else {
    let userSama = false;
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
  // count day left end
  return (
    <>
      <div className={styles.cardHead}>
        <h1>{dataDonorAll.dataDonate.title}</h1>
        {userSama ? (
          <>
            <div className={styles.dropwarp}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  <img className={styles.roda} src={setImage}></img>
                  <img className={styles.arrow} src={setImage2}></img>
                </button>
                <div className={styles.dropdowncontent}>
                  <Link>Edit</Link>
                  <Link>Close Campaign</Link>
                  <Link>Delete</Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>

      <div className={styles.container}>
        <div className={styles.cardKiri}>
          <img src={dataDonorAll.dataDonate.header_img}></img>
        </div>
        {/* {  console.log({idUser}) }
            {console.log(idUserFromChamping)} */}

        <div className={styles.cardKanan}>
          <h1>
            <NumberFormat
              value={dataDonorAll.dataDonate.raised}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"IDR."}
            />
          </h1>
          <h4>
            <NumberFormat
              value={dataDonorAll.dataDonate.goal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"IDR."}
            />
          </h4>
          <div className={styles.progress}>
            <div
              className={styles.progressDone}
              style={{ width: `${progress}%`, opacity: "1" }}
            ></div>
            extra :
            <NumberFormat
              value={progress2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"  IDR."}
            />
          </div>
          <div className={styles.profilContainer}>
            <img src={dataDonorAll.dataDonate?.User?.photo}></img>
            <div className={styles.profilName}>
              <h3>{dataDonorAll.dataDonate?.User?.name}</h3>
              <h4>Fundraiser</h4>
              {userSama ? (
                <Link className={styles.cekStatus}>Check status</Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styles.dataCount}>
            <div>
              <h1>{dayleft}</h1>
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
            onClick={() => postShare(idDonate)}
            className={styles.btnShare}
          >
            Share
          </button>
          {userSama ? (
            <button className={styles.btnDonate}>NEW PROGRESS</button>
          ) : (
            <button className={styles.btnDonate}>Donate</button>
          )}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postShare: (idDonate) => dispatch(postShare(idDonate)),
});

const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailsDonateBigCard);
