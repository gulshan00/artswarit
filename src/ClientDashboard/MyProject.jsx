// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function MyProject() {
     const [postedJobs, setPostedJobs] = useState([]);
        const [jobForm, setJobForm] = useState({ title: '', description: '', budget: '' });
        const handlePostJob = () => {
            setPostedJobs([...postedJobs, jobForm]);
            setJobForm({ title: '', description: '', budget: '' });
        };
    return (
        <div className="space-y-4 max-w-xl">
            <h2 className="text-lg font-semibold">Post a Job</h2>
            <input
                placeholder="Project Title"
                className="w-full px-3 py-2 border rounded"
                value={jobForm.title}
                onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
            />
            <textarea
                placeholder="Project Description"
                className="w-full px-3 py-2 border rounded"
                value={jobForm.description}
                onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
            ></textarea>
            <input
                placeholder="Budget"
                className="w-full px-3 py-2 border rounded"
                value={jobForm.budget}
                onChange={(e) => setJobForm({ ...jobForm, budget: e.target.value })}
            />
            <button
                onClick={handlePostJob}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Post Job
            </button>

            {postedJobs.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-2">Your Posted Jobs</h3>
                    <ul className="space-y-2">
                        {postedJobs.map((job, index) => (
                            <li key={index} className="border rounded p-3 bg-white shadow">
                                <strong>{job.title}</strong><br />
                                {job.description}<br />
                                <em>Budget: ${job.budget}</em>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

