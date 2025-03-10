import { getJobs } from "@/app/lib/jobs_server";
import { GetJobsOptions } from "@/app/lib/jobs";


export async function GET(req: Request) {
    const getJobOptions: GetJobsOptions = {}

    const { searchParams } = new URL(req.url);


    const page = Number(searchParams.get("page")); // Get the page query parameter
    if (page) {
        if (isNaN(Number(page)) || Number(page) < 1) {
            return new Response("Invalid page number", { status: 422 });
        }
        getJobOptions.page = page
    }

    const jobTitle = searchParams.get("jobTitle"); // Get the jobTitle query parameter
    if (jobTitle) {
        if (typeof jobTitle !== 'string') {
            return new Response("Invalid job title", { status: 422 });
        }
        getJobOptions.jobTitle = jobTitle
    }
    const company = searchParams.get("company"); // Get the company query parameter
    if (company) {
        if (typeof company !== 'string') {
            return new Response("Invalid company filter", { status: 422 });
        }
        getJobOptions.company = company
    }

    const jobs = await getJobs(getJobOptions);

    return Response.json(jobs);
}

export async function POST() {
    return new Response(null, { status: 405 }); // Method Not Allowed
}
