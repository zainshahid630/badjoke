import React from "react";
import bgimage from '../../assets/hero-bg.png'
import bjImage from '../../assets/Logotoken.png';
import "./bonus.css";

import ClaimTokenForm from './ClaimTokenForm';
import BuyTokenForm from './BuyTokenForm';

const Fundingbonus = () => {
  return (
    <section className="flex relative flex-col items-center self-stretch px-20 pt-8 pb-28 w-full min-h-[1049px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/595d9976dfb42e5b51f154f99ea7f1a86aebdc44c57058cf39514c43215a6669?placeholderIfAbsent=true&apiKey=7b0a2affc2494bcdb5c8d003f715233a" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col items-center mb-0 w-full max-w-[1692px] max-md:mb-2.5 max-md:max-w-full">
        <div className="mt-11 max-w-full w-[651px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 max-w-full rounded-none h-[119px] w-[643px]" />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 mx-auto mt-20 max-w-full rounded-full bg-black bg-opacity-50 h-[19px] w-[445px] max-md:mt-10" />
            </div>
          </div>
        </div>
        <h1 className="z-10 -mt-3 text-2xl font-bold tracking-wider text-center text-white w-[1315px] max-md:max-w-full">
          Peace, Unity, Integrity, and Hope for All.
        </h1>
        <p className="mt-5 text-2xl font-semibold tracking-wider text-center text-white w-[1315px] max-md:max-w-full">
          Next Price IN
         </p>
        <div className="self-stretch mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ClaimTokenForm />
            <BuyTokenForm />
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9da491365f37c6e7fd0578b9d856e20b9aaf3cb6dbe3693104c50d97ec1008a3?placeholderIfAbsent=true&apiKey=7b0a2affc2494bcdb5c8d003f715233a" alt="" className="object-contain mt-5 max-w-full aspect-[9.9] w-[404px]" />
      </div>
    </section>
  );
};

export default Fundingbonus;
