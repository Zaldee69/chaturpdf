import Duration from "@/components/Duration";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PaymentMethod from "@/components/PaymentMethod";
import React from "react";

const Page = () => {
  return (
    <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-3xl">
      <Duration />
      <PaymentMethod />
    </MaxWidthWrapper>
  );
};

export default Page;
