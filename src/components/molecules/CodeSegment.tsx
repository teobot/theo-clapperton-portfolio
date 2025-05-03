"use client";

import { differenceInYears } from "date-fns";

// data imports
import DATA from "@/data/details.json";

export default function CodeSegment() {
  const { FIRST_NAME, LAST_NAME, JOB_TITLE, COMPANY, BIRTH_DAY } = DATA;

  const SHARED_CSS = "text-md md:text-xl font-mono w-fit whitespace-nowrap";

  const START_CONTAINER = "flex gap-2";
  const START_CONTAINER_INDENT = "flex gap-2 ml-4 md:ml-8";

  const CIRCLE_CSS = "rounded-full w-2 h-2 md:w-3 md:h-3";

  const YellowText = ({ text }: { text: string }) => {
    return <div className={`text-[#ffc107] ${SHARED_CSS}`}>{text}</div>;
  };

  const BlueText = ({ text }: { text: string }) => {
    return <div className={`text-[#0dcaf0] ${SHARED_CSS}`}>{text}</div>;
  };

  const RedText = ({ text }: { text: string }) => {
    return <div className={`text-[#dc3545] ${SHARED_CSS}`}>{text}</div>;
  };

  const WhiteText = ({ text }: { text: string }) => {
    return <div className={`text-black ${SHARED_CSS}`}>{text}</div>;
  };

  const GreenText = ({ text }: { text: string }) => {
    return <div className={`text-[#9fca56] ${SHARED_CSS}`}>{text}</div>;
  };

  return (
    <div className="bg-[#212529] p-5 lg:p-6 rounded-xl flex flex-col h-fit w-fit mx-auto max-w-full">
      <div className="flex flex-row mb-4">
        <div className={`bg-[#dc3545] ${CIRCLE_CSS}`} />
        <div className={`bg-[#ffc107] ${CIRCLE_CSS} mx-2`} />
        <div className={`bg-[#198754] ${CIRCLE_CSS}`} />
      </div>
      <div className="overflow-x-hidden">
        <div className={START_CONTAINER}>
          <YellowText text="class" />
          <BlueText text="Me" />
          <WhiteText text="{" />
        </div>
        <div className={START_CONTAINER_INDENT}>
          <YellowText text="public" />
          <GreenText text="string" />
          <BlueText text="Name" />
          <GreenText text="=" />
          <BlueText text={`"${FIRST_NAME} ${LAST_NAME}"`} />
        </div>
        <div className={START_CONTAINER_INDENT}>
          <YellowText text="public" />
          <GreenText text="int" />
          <BlueText text="Level" />
          <GreenText text="=" />
          <RedText
            text={differenceInYears(new Date(), new Date(BIRTH_DAY)).toString()}
          />
        </div>
        <div className={START_CONTAINER_INDENT}>
          <YellowText text="public" />
          <GreenText text="string" />
          <BlueText text="Company" />
          <GreenText text="=" />
          <BlueText text={`"${COMPANY}"`} />
        </div>
        <div className={START_CONTAINER_INDENT}>
          <YellowText text="public" />
          <GreenText text="Job" />
          <BlueText text="myJob" />
          <GreenText text="=" />
          <div className={START_CONTAINER}>
            <YellowText text="new" />
            <BlueText text={`Job("${JOB_TITLE}")`} />
          </div>
        </div>
        <div className={START_CONTAINER}>
          <WhiteText text="}" />
        </div>
      </div>
    </div>
  );
}
