import { formatDate } from "@/app/lib/dates"
import { useJobs } from "@/app/lib/hooks"
import { useState } from "react"

export const JobList = () => {
    const [page, setPage] = useState(1)
    const [company, setCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const { loading, error, jobs } = useJobs(page, jobTitle, company)

    return (
        <>
            <div>
                <label>
                    Company:{' '}
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </label>
                <label>
                    Job title:{' '}
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </label>
            </div>
            {jobs.length > 0 ? (
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.jobTitle}</strong> at <em>{job.company}</em>{' '}
                            <small>({formatDate(job.date)})</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <li>No job to display</li>
            )}
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Previous page
                </button>
                <button disabled={jobs.length < 10} onClick={() => setPage(page + 1)}>
                    Next page
                </button>
            </div>
            {loading && <div>Loading jobs...</div>}
            {error && <div>An error occurred while loading jobs.</div>}
        </>
    )
}