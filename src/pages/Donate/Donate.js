import React, { useState, useEffect } from "react";
import Payments from "../../components/Payments/Payments";
import Information from "../../components/Information/Information";

function Donate() {
  const [donation, setDonation] = useState({});

  useEffect(() => {
    console.log(donation);
  }, []);

  const handleDonate = () => {
    console.log(donation);
  };

  return (
    <>
      <div>
        <Information donation={donation} setDonation={setDonation} />
        <Payments
          donation={donation}
          setDonation={setDonation}
          handleDonate={handleDonate}
        />
      </div>
    </>
  );
}

export default Donate;
