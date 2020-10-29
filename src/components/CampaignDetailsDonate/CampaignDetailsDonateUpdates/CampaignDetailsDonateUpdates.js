import React from "react";
import styles from "./CampaignDetailsDonateUpdates.module.css";
import moment from "moment";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import {getDonationStoryLoadMore} from '../../../redux/actions/donorActions';
import { useParams  } from "react-router-dom";
import { useState  } from "react";




const CampaignDetailsDonateUpdates = ({ dataDonorAll ,getDonationStoryLoadMore }) => {
  //   console.log(dataDonorAll)
  let { idDonate  } = useParams();
  const [page, setPage] = useState(2);
  
  const handleClick =()=> {
    setPage(page+1)
    getDonationStoryLoadMore(idDonate , page)
  }




  const sortedActivities = dataDonorAll?.dataDonateStory;
  let pageLimit = dataDonorAll?.dataDonateStory?.total_page;
  // console.log(sortedActivities.length);
  // console.log(sortedActivities);
  // console.log(sortedActivities.reverse());


  const UserAllStory = sortedActivities.reverse()  
    .map((item, index) => {
      // count Day left
      let now = moment(new Date()); //todays date
      let end = moment(`${item.createdAt}`); // another date
      let duration = moment.duration(now.diff(end));
      let days = duration.asDays();
      let dayleft = Math.abs(parseInt(days));
      let hari = "";
      // count day left en
      console.log(dayleft);
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
              <div className={styles.liBody}>
                <h2>
                  {" "}
                  <NumberFormat
                    value={item.ammount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"IDR."}
                  />
                </h2>
                <p>{item.content}</p>
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
                <p>{item.content}</p>
              </div>
            </div>
          </li>
        );
      }
    });

  return (
    <>
    <div className={styles.container}>
      <ul className={styles.bar}>
        <h1 className={styles.countdata}>
          Updates ({sortedActivities.length})
        </h1>
        {UserAllStory}
        { console.log(UserAllStory)}
      </ul>
      
        
    </div>
    <div className={styles.btnwrap}>
            {/* button di taruh fungsi untuk menganti max slice */}


            {page > pageLimit ?  <button onClick={handleClick} className={styles.btnLoadmore}>More</button>: null} 
           

            </div>
    </>
  );
};

const mapDispatchToProps = dispatch =>({
  getDonationStoryLoadMore:(idDonate ,page)=>dispatch(getDonationStoryLoadMore(idDonate ,page)),

  });

const mapStateToProps = (state) => ({
  dataDonorAll: state.dataDonorAll,
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetailsDonateUpdates);
