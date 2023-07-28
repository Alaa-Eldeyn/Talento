import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/UserSlice";
import jobSlice from "./job/jobSlice";
import allJobsSlice from "./allJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
