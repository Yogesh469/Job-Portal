import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-blue-50">

                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <div>

                            <p className="text-blue-600 font-semibold mb-4">
                                FIND YOUR DREAM JOB
                            </p>

                            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                                Find the Right Job
                                <span className="text-blue-600">
                                    {" "}for Your Future
                                </span>
                            </h1>

                            <p className="text-slate-500 text-lg mt-6 leading-7">
                                Discover the latest job opportunities from
                                trusted companies and take the next step
                                in your career.
                            </p>

                            {/* Search Box */}
                            <div className="bg-white shadow-lg rounded-xl p-3 mt-8">

                                <div className="flex flex-col md:flex-row gap-3">

                                    <input
                                        type="text"
                                        placeholder="Job title or keyword"
                                        className="flex-1 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="flex-1 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                                    />

                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                                        Search Jobs
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="hidden md:flex justify-center">

                            <div className="bg-blue-600 rounded-3xl p-8 w-96 shadow-xl">

                                <div className="bg-white rounded-2xl p-6">

                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl font-bold">
                                        JP
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 mt-6">
                                        Your Career Starts Here
                                    </h2>

                                    <p className="text-slate-500 mt-3">
                                        Connect with companies and discover
                                        opportunities that match your skills.
                                    </p>

                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-blue-700 transition">
                                        Explore Jobs
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Stats Section */}
            <section className="py-12">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-blue-600">
                                1000+
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Jobs
                            </p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-blue-600">
                                500+
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Companies
                            </p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-blue-600">
                                5000+
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Job Seekers
                            </p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-blue-600">
                                1000+
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Successful Hires
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;