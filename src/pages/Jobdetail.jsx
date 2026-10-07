import React, { useState } from "react";
import JobCard from "../components/Jobcard";
const Jobs = () => {

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("All");

    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Solutions",
            location: "Kathmandu, Nepal",
            type: "Full Time",
            experience: "1-2 Years",
            salary: "Rs. 40,000 - 60,000",
            description:
                "We are looking for a skilled frontend developer with experience in React and modern web technologies.",
        },
        {
            id: 2,
            title: "React Developer",
            company: "Digital Nepal",
            location: "Lalitpur, Nepal",
            type: "Full Time",
            experience: "2-3 Years",
            salary: "Rs. 50,000 - 70,000",
            description:
                "Join our development team and build modern web applications using React.",
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "Kathmandu, Nepal",
            type: "Part Time",
            experience: "1-2 Years",
            salary: "Rs. 30,000 - 45,000",
            description:
                "Design beautiful and user-friendly interfaces for web and mobile applications.",
        },
        {
            id: 4,
            title: "Backend Developer",
            company: "ABC Corporation",
            location: "Pokhara, Nepal",
            type: "Full Time",
            experience: "2-4 Years",
            salary: "Rs. 55,000 - 80,000",
            description:
                "Looking for a backend developer with Node.js, Express and MongoDB experience.",
        },
        {
            id: 5,
            title: "Digital Marketing Executive",
            company: "Growth Nepal",
            location: "Kathmandu, Nepal",
            type: "Full Time",
            experience: "1-3 Years",
            salary: "Rs. 35,000 - 50,000",
            description:
                "Develop and execute digital marketing strategies to grow our online presence.",
        },
        {
            id: 6,
            title: "Software Engineer",
            company: "Innovate Tech",
            location: "Remote",
            type: "Remote",
            experience: "2-5 Years",
            salary: "Rs. 70,000 - 100,000",
            description:
                "Work with our engineering team to develop scalable and reliable software solutions.",
        },
    ]

    const filteredJobs = jobs.filter((job) => {

        const searchMatch =
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase());

        const locationMatch =
            job.location.toLowerCase().includes(location.toLowerCase());

        const typeMatch =
            jobType === "All" || job.type === jobType;

        return searchMatch && locationMatch && typeMatch;
    });

    return (
        <div className="min-h-screen bg-slate-50">

            
            <section className="bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold">
                        Find Your Next Job
                    </h1>

                    <p className="mt-3 text-blue-100">
                        Explore job opportunities and find the perfect
                        position for your career.
                    </p>
                </div>
            </section>

            
            <section className="max-w-7xl mx-auto px-6 -mt-6">

                <div className="bg-white rounded-xl shadow-lg p-5">

                    <div className="grid md:grid-cols-3 gap-4">

                        <input
                            type="text"
                            placeholder="Search job title or company"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Search location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <select
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            className="border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        >
                            <option value="All">All Job Types</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Remote">Remote</option>
                        </select>

                    </div>

                </div>

            </section>

            
            <section className="max-w-7xl mx-auto px-6 py-12">

                <h2 className="text-2xl font-bold text-slate-900">
                    Available Jobs
                </h2>

                <p className="text-slate-500 mt-1 mb-6">
                    {filteredJobs.length} jobs found
                </p>

              
                <div className="grid lg:grid-cols-2 gap-6">

                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                        />
                    ))}

                </div>

               
                {filteredJobs.length === 0 && (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <h3 className="text-xl font-semibold text-slate-800">
                            No jobs found
                        </h3>

                        <p className="text-slate-500 mt-2">
                            Try changing your search or filters.
                        </p>
                    </div>
                )}

            </section>

        </div>
    );
};

export default Jobs;