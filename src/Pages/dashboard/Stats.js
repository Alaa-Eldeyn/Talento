import React from "react";
import { useEffect } from "react";
import { ChartsContainer, StatsContainer } from "../../Component";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import Loading from "../../Component/Loading";

const Stats = () => {
  
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
