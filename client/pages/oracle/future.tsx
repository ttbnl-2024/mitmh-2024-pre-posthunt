import React, { useContext } from 'react';

const FramePage: React.FC = () => {
  return (
    <>
      <h2
        className="text-white text-center pt-8 font-bold"
        style={{ fontFamily: 'times new roman, serif;' }}
      >
        Consult the Oracle
      </h2>
      <p
        className="text-center text-white"
        style={{ fontFamily: 'times new roman, serif;' }}
      >
        The Oracle is proud to announce a new integrated future-telling system
        for all your augury needs. At each place you may seek guidance, we have
        placed an area where you can describe your request. They will be
        virtually burned in the e-fires of our Oracle database and be sent to us
        for divination and response.
      </p>
    </>
  );
};

export default FramePage;

export const getServerSideProps = (context) => {
  return {
    props: {
      bare: true,
    },
  };
};
