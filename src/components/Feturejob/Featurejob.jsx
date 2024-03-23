import { useEffect, useState } from "react";
import Blogs from "../Blog/Blogs";


const FeatureJob = () => {
    const [job, setJob] = useState([])
    const [data, setData] = useState(4)
    const handleClick = () => {
        setData(6)
    }
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl text-center font-bold">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" grid grid-cols-2 md:px-28 gap-6 max-w-7xl m-auto ">
                {
                    job.slice(0, data).map((work) => <Blogs key={work.id} job={work}></Blogs>)
                }
            </div>

            <div className={`flex items-center justify-center ${data === 6 && 'hidden'}`}>
                <button onClick={() => handleClick()} className=" btn btn-primary border-none bg-[#7E90FE]">View More</button>
            </div>

        </div>
    );
};

export default FeatureJob;