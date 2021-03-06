import { RegularButton } from "@/components/UI/atoms/button/regular";
import { RegularInput } from "@/components/UI/atoms/input/regular-input";
import { Label } from "@/components/UI/atoms/label";
import React from "react";

const FeeAndAmount = ({
  npmStake,
  setNpmStake,
  reassuranceAmt,
  setReassuranceAmt,
  coverLiquidity,
  setCoverLiquidity,
}) => {
  return (
    <>
      <Label htmlFor={"cover_pricing"} className={"mt-10 mb-2"}>
        Fee And Amount
      </Label>
      <RegularInput
        className="leading-none"
        inputProps={{
          id: "npm_stake",
          placeholder: "Enter NPM Stake",
          value: npmStake,
          onChange: (e) => setNpmStake(e.target.value),
        }}
      />
      <p className="text-sm text-9B9B9B mt-2 mb-x pl-2">
        Enter NPM token stake. 1000 NPM fee. Min: 5000 NPM
      </p>
      <RegularButton className={"mt-8 px-10 py-4 mb-8"}>
        Approve NPM
      </RegularButton>
      {/* reassurance */}
      <RegularInput
        className="leading-none"
        inputProps={{
          id: "reassurance_amt",
          placeholder: "Enter Reassurance Amount",
          value: reassuranceAmt,
          onChange: (e) => setReassuranceAmt(e.target.value),
        }}
      />
      <p className="text-sm text-9B9B9B mt-2 mb-x pl-2">
        Enter a reassurance amount
      </p>
      <RegularButton className={"my-8 px-10 py-4 "}>Approve DAI</RegularButton>
      {/* cover liquidity */}
      <RegularInput
        className="leading-none"
        inputProps={{
          id: "cover_liquidity",
          placeholder: "Cover Liquidity",
          value: coverLiquidity,
          onChange: (e) => setCoverLiquidity(e.target.value),
        }}
      />
      <p className="text-sm text-9B9B9B mt-2 mb-x pl-2">
        Enter a reassurance amount
      </p>
      <RegularButton className={"my-8 px-10 py-4 "}>Approve DAI</RegularButton>
    </>
  );
};

export default FeeAndAmount;
