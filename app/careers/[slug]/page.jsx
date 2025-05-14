import JobDetailsPage from "@/components/careers page/job details";
import { jobPosts } from "@/constants/jobs";

const Page = ({ params: { slug } }) => {
  const job = jobPosts.find((j) => j.slug === slug);
  return <JobDetailsPage job={job} />;
};

export default Page;
