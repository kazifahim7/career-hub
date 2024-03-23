import { CiDollar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({ job }) => {
    return (
        <div className="mb-4">
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img src={job.logo} alt="Movie" className="w-full h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <div className="space-x-4">
                        <button className="btn btn-outline btn-success">{job.remote_or_onsite}</button>
                        <button className="btn btn-outline btn-success">{job.job_type}</button>
                    </div>

                    <div className="flex items-center ">
                        <p className="flex items-center"><FaLocationDot /> {job.location}</p>
                        <p className="flex items-center"><CiDollar /> {job.salary}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${job.id}`}> <button className="btn btn-primary border-none bg-[#7E90FE]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;