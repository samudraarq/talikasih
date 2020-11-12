import React from "react";
import styles from "./CampaignDetailsDonateUpdates.module.css";
import moment from "moment";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { getDonationStoryLoadMore } from "../../../redux/actions/donorActions";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CampaignDetailsDonateUpdates = ({
  dataDonorAll,
  getDonationStoryLoadMore,
}) => {
  let { idDonate } = useParams();
  const [page, setPage] = useState(2);

  const handleClick = () => {
    setPage(page + 1);
    getDonationStoryLoadMore(idDonate, page);
  };

  let pageLimit = dataDonorAll?.dataDonateStory?.total_page;
  const sortedActivities = dataDonorAll?.dataDonateUpdates;

  const UserAllStory = sortedActivities?.reverse().map((item, index) => {
    // count Day left
    let now = moment(new Date()); //todays date
    let end = moment(`${item.createdAt}`); // another date
    let duration = moment.duration(now.diff(end));
    let days = duration.asDays();
    let dayleft = Math.abs(parseInt(days));
    let hari = "";
    // hendel dia whitdraw atau coment
    if (item.StatusId === 1) {
      // hendel today yesterday
      if (dayleft === 0) {
        hari = "TODAY";
      } else {
        if (dayleft === 1) {
          hari = "YESTERDAY";
        } else {
          hari = `${moment(item.createdAt).fromNow()}`;
        }
      }
      // hendel today end

      return (
        <li key={index}>
          <div className={styles.liwrap}>
            <div className={styles.liHead}>
              <h1>{hari}</h1>
              <button className={styles.btnWithdrawal}>Withdrawal</button>
            </div>
            <div className={styles.liBodydrow}>
              <h2>
                {" "}
                <NumberFormat
                  value={item.ammount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp."}
                />
              </h2>
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          </div>
        </li>
      );
    } else {
      // hendel today yesterday
      if (dayleft === 0) {
        hari = "TODAY";
      } else {
        if (dayleft === 1) {
          hari = "YESTERDAY";
        } else {
          hari = `${moment(item.createdAt).fromNow()}`;
        }
      }
      // hendel today end

      return (
        <li key={index}>
          <div className={styles.liwrap}>
            <div className={styles.liHead}>
              <h1>{hari} </h1>
              <p>Recepient update</p>
            </div>
            <div className={styles.liBody}>
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          </div>
        </li>
      );
    }
  });

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <ul className={styles.bar}>
          <h1 className={styles.countdata}>
            Updates ({sortedActivities?.length})
          </h1>
          {sortedActivities?.length === 0 ? (
            <h1 style={{ textAlign: `center` }}>No Update Data</h1>
          ) : (
            UserAllStory
          )}
        </ul>
        <div className={styles.btnwrap}>
          {page < pageLimit ? (
            <button onClick={handleClick} className={styles.btnLoadmore}>
              LOAD MORE
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDonationStoryLoadMore: (idDonate, page) =>
    dispatch(getDonationStoryLoadMore(idDonate, page)),
});

const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailsDonateUpdates);
