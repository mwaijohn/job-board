import { Job, JobSummary, toJobSummary,toJob } from './jobs'
import { readFile } from 'fs/promises'
import { join } from 'path'

const readJobsFromJson = async (): Promise<Job[]> => {
    const json = await readFile(join(process.cwd(), 'jobs.json'), 'utf-8')
    return (JSON.parse(json) as any[]).map(toJob)
}
export const getJobs = async (): Promise<JobSummary[]> => {
    const jobs = await readJobsFromJson()
    return jobs.map(toJobSummary)
}