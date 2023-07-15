import { differenceInYears } from "date-fns";

export type CodeSegmentProps = {
  details: {
    name: string;
    bday: string;
    company: string;
    job: string;
  };
};

export default function CodeSegment({ details }: CodeSegmentProps) {
  return (
    <div className="bg-dark p-3 p-md-4 rounded">
      <div className="d-flex flex-row mb-3">
        <div className="circle bg-danger me-2" />
        <div className="circle bg-warning me-2" />
        <div className="circle bg-success" />
      </div>
      <div className="snippet-container">
        <div className="d-flex flex-row spacer property">
          <div className="text-warning">class</div>
          <div className="text-info">Me</div>
          <div>{`{`}</div>
        </div>
        <div className="code-container ps-4">
          <div className="property">
            <div className="visability text-warning">public</div>
            <div className="type text-success2">string</div>
            <div className="name text-info">Name</div>
            <div className="equals text-success2">=</div>
            <div className="value text-info">{`"${details.name}"`}</div>
            <div className="end">;</div>
          </div>

          <div className="property">
            <div className="visability text-warning">public</div>
            <div className="type text-success2">int</div>
            <div className="name text-info">Level</div>
            <div className="equals text-success2">=</div>
            <div className="value text-danger">
              {differenceInYears(new Date(), new Date(details.bday))}
            </div>
            <div className="end">;</div>
          </div>

          <div className="property">
            <div className="visability text-warning">public</div>
            <div className="type text-success2">string</div>
            <div className="name text-info">Company</div>
            <div className="equals text-success2">=</div>
            <div className="value text-info">{`"${details.company}"`}</div>
            <div className="end">;</div>
          </div>

          <div className="property">
            <div className="visability text-warning">public</div>
            <div className="type text-success2">Job</div>
            <div className="name text-info">myJob</div>
            <div className="equals text-success2">=</div>
            <div className="d-flex flex-row spacer value">
              <div className="text-warning">new</div>
              <div className="text-info p-0">{`Job("${details.job}")`}</div>
            </div>
            <div className="end">;</div>
          </div>
        </div>
        <div className="d-flex flex-row spacer property">
          <div>{`}`}</div>
        </div>
      </div>
    </div>
  );
}
