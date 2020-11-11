import React, { useEffect } from "react";
import styles from "./Trending.module.css";
import { connect } from "react-redux";
import { getTrendingCampaign } from "../../../redux/actions/campaignActions";

import openQuote from "../../../assets/homepage/Home/openQuote.svg";
import closeQuote from "../../../assets/homepage/Home/closeQuote.svg";
import SkeletonTrending from "../../Skeleton/SkeletonTrending";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";

// import trendingImage from "../../../assets/homepage/Home/Rectangle 33.png";
// import fundraiser from "../../../assets/homepage/Home/Rectangle 37.png";

const Trending = ({ trendingCampaign, getTrendingCampaign }) => {
  useEffect(() => {
    getTrendingCampaign();
  }, [getTrendingCampaign]);

  const trending = trendingCampaign?.documents;

  return (
    <>
      {trendingCampaign.loading ? (
        <SkeletonTrending />
      ) : (
        <Container>
          <h3 className={styles.segmentTitle}>Trending Topic</h3>
          <h2 className={styles.topicTitle}>{trending?.title}</h2>
          <div className={styles.content}>
            <Link
              to={`/campaign/details/donate/${trendingCampaign.documents.id}`}
              className={styles.trendingLink}
            >
              <img
                src={trending?.header_img}
                alt="Trending"
                className={styles.trendingImage}
              />
            </Link>

            <div className={styles.quote}>
              <div>
                <img
                  src={openQuote}
                  alt="openQuote"
                  className={styles.openQuote}
                />
                <p
                  className={styles.quoteText}
                  dangerouslySetInnerHTML={{ __html: trending?.story }}
                ></p>
                <img
                  src={closeQuote}
                  alt="closeQuote"
                  className={styles.closeQuote}
                />
              </div>
              <div className={styles.fundraiser}>
                <img
                  src={trending?.User?.photo}
                  alt="fundraise"
                  className={styles.fundraiserImg}
                />
                <div>
                  <p className={styles.fundraiserName}>
                    {trending?.User?.name}
                  </p>
                  <p className={styles.fundraiserTitle}>Fundraiser</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    trendingCampaign: state.trendingCampaign,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrendingCampaign: () => dispatch(getTrendingCampaign()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
