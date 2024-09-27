import React from 'react';

function BuyTokenForm() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-2xl font-semibold text-white max-md:mt-7 max-md:max-w-full">
        <div className="flex flex-col px-11 py-8 shadow-sm bg-black bg-opacity-30 rounded-[50px] max-md:px-5 max-md:max-w-full">
          <label htmlFor="referralLink" className="self-start">Paste Referral Link</label>
          <input
            id="referralLink"
            type="text"
            placeholder="eg:"
            className="px-4 py-5 mt-2.5 font-medium whitespace-nowrap rounded-2xl bg-black bg-opacity-30 text-white text-opacity-70 max-md:pr-5 max-md:max-w-full"
          />
          <label htmlFor="amount" className="self-start mt-2.5">Enter Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="0000"
            className="px-4 py-5 mt-2.5 font-medium whitespace-nowrap rounded-2xl bg-black bg-opacity-30 text-white text-opacity-70 max-md:pr-5 max-md:max-w-full"
          />
          <button className="px-16 py-6 mt-16 font-bold tracking-tighter leading-none text-teal-800 whitespace-nowrap bg-white rounded-2xl shadow-[0px_2px_6px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyTokenForm;