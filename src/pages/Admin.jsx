
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { deleteJob } from "../redux/jobSlice.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSuitcase, faBuilding, faUsers, faFileLines } from "@fortawesome/free-solid-svg-icons"


const Admin = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()


    const data = useSelector((item) => item.jobs.jobs)

    console.log(data.length)

    const [showall ,setshowall] =useState(false)

    const displayjobs = showall? data:data.slice(0,6)








    const stats = [
        {
            title: "Total Jobs",
            value: data.length,
            icon: faSuitcase,
        },
        {
            title: "Companies",
            value: "45",
            icon: faBuilding,
        },
        {
            title: "Users",
            value: "850",
            icon: faUsers,
        },
        {
            title: "Applications",
            value: "320",
            icon: faFileLines,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">


            <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">

                <h1 className="text-2xl font-bold mb-10">
                    JobPortal
                </h1>

                <nav className="space-y-3">

                    <a
                        href="#"
                        className="block bg-white text-blue-700 px-4 py-3 rounded-lg font-semibold"
                    >
                        Dashboard
                    </a>

                    <a
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Manage Jobs
                    </a>

                    <a
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Companies
                    </a>

                    <a
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Users
                    </a>

                    <a
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Applications
                    </a>

                    <a
                        href="#"
                        className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Settings
                    </a>

                </nav>

                <button className="mt-10 w-full bg-white text-blue-700 py-2 rounded-lg font-semibold hover:bg-gray-100">
                    Logout
                </button>

            </aside>


            <main className="flex-1 p-8">


                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Admin Dashboard
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Manage your job portal from here.
                        </p>
                    </div>

                    <div className="bg-white px-5 py-3 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">
                            Welcome, Admin
                        </p>

                        <p className="font-semibold text-blue-600">
                            Administrator
                        </p>
                    </div>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                        >

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        {stat.title}
                                    </p>

                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">
                                        {stat.value}
                                    </h3>
                                </div>

                                <div className="text-3xl bg-blue-50 p-3 rounded-lg">
                                    <FontAwesomeIcon icon={stat.icon} />
                                </div>

                            </div>

                        </div>
                    ))}

                </div>


                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

                    <h3 className="text-xl font-bold text-gray-800 mb-5">
                        Quick Actions
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        <button className="border border-blue-200 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            onClick={() => nav("/add-job")}
                        >
                            + Add Job
                        </button>

                        <button className="border border-blue-200 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                            + Add Company
                        </button>

                        <button className="border border-blue-200 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                            Manage Users
                        </button>

                        <button className="border border-blue-200 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                            View Applications
                        </button>

                    </div>

                </div>


                <div className="bg-white rounded-xl shadow-sm p-6">

                    <div className="flex justify-between items-center mb-5">

                        <h3 className="text-xl font-bold text-gray-800">
                            Recent Jobs
                        </h3>

                        <button className="text-blue-600 font-semibold hover:underline"

                        onClick={()=>setshowall(!showall)}
                        
                        >
                           {showall?"show-less":"view-all"}
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            <thead>
                                <tr className="border-b text-gray-500 text-sm">
                                    <th className="py-3">Job Title</th>
                                    <th className="py-3">Company</th>
                                    <th className="py-3">Location</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {displayjobs.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b last:border-none hover:bg-gray-50"
                                    >

                                        <td className="py-4 font-semibold text-gray-800">
                                            {item.title}
                                        </td>

                                        <td className="py-4 text-gray-600">
                                            {item.company}
                                        </td>

                                        <td className="py-4 text-gray-600">
                                            {item.location}
                                        </td>

                                        <td className="py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${new Date(item.deadline).setHours(0, 0, 0, 0) <
                                                    new Date().setHours(0, 0, 0, 0)
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-green-100 text-green-600"
                                                    }`}
                                            >
                                                {new Date(item.deadline).setHours(0, 0, 0, 0) <
                                                    new Date().setHours(0, 0, 0, 0)
                                                    ? "Inactive"
                                                    : "Active"}
                                            </span>
                                        </td>

                                        <td className="py-4">

                                            <button className="text-blue-600 hover:underline mr-4"

                                                onClick={() => nav(`/add-job/${item.id}`)}

                                            >
                                                Edit
                                            </button>

                                            <button className="text-red-500 hover:underline"
                                                onClick={() => {

                                                    if (window.confirm("Are you sure want to delete this job ?")) {
                                                        dispatch(deleteJob(item.id))

                                                    }

                                                }

                                                }




                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default Admin;

