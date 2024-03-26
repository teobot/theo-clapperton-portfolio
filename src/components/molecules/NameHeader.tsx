// component
import Button from "@/components/atoms/Button";

// data
import DATA from "@/data/details.json";

export default function NameHeader() {
  const { FIRST_NAME, JOB_TITLE, COMPANY } = DATA;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
      <div className="col-span-1 flex justify-center items-center">
        <Button title="Full Stack" className="" />
      </div>
      <div className="text-center flex flex-col gap-5 col-span-2">
        <div className="text-5xl font-bold text-white">{`Hi, I'm ${FIRST_NAME}`}</div>
        <div className="text-xl text-gray-100 text-opacity-75">{`${JOB_TITLE} at ${COMPANY}`}</div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <Button title="Creator" className="" />
      </div>
    </div>
  );
}
