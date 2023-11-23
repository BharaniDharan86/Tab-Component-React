/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Company from "./Company";
import About from "./About";

const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(1);

  async function fetchJobs() {
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
  }

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="container">
      <div className="company">
        {jobs?.map((job, index) => {
          return (
            <Company
              company={job.company}
              index={index}
              activeJob={activeJob}
              setActiveJob={setActiveJob}
            />
          );
        })}
      </div>
      <About content={jobs[activeJob]} />
    </div>
  );
};
export default App;
