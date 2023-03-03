/*
  ARROW FUNCTION
*/

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
]

const activeJobs = jobs.filter(function (job) {
  return job.isActive
})

// (***) easy to read > just read from left to right
const activeJobsX = jobs.filter((job) => job.isActive)
