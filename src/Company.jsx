/* eslint-disable react/prop-types */
function Company({ company, index, setActiveJob, activeJob }) {
  console.log(company);
  return (
    <div>
      <p
        onClick={() => setActiveJob(index)}
        className={index === activeJob ? "active" : ""}
      >
        {company}
      </p>
    </div>
  );
}

export default Company;
