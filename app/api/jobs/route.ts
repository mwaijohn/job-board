import { getJobs } from "@/app/lib/jobs_server";

const jobs = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Product Manager" },
];

export async function GET() {
    const jobs = await getJobs();
    return Response.json(jobs);
}

export async function POST() {
    return new Response(null, { status: 405 }); // Method Not Allowed
}
