export interface Job {
    id: string
    jobTitle: string
    company: string
    description: string
    applyUrl: string
    date: Date
}
export type JobSummary = Omit<Job, 'applyUrl' | 'description'>
// The object in the JSON contains the date as a string, we need
// to convert it as a Date:
export const toJob = (obj: any): Job => ({ ...obj, date: new Date(obj.date) })
// Remove description and applyUrl from the Job to make it a JobSummary:
export const toJobSummary = (job: Job): JobSummary => {
    const { description, applyUrl, ...jobSummary } = job
    return jobSummary
}