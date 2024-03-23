import { useLoaderData, useParams } from "react-router-dom";
import Header2 from "./Header2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setJob } from "../../utility/local";


const JObDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const num = parseInt(id)
    const job = jobs.find(job => job.id === num)
    


    const handleClick =()=>{
        setJob(num)

        toast('successful')
    }
    return (
        <div className="">
            <Header2 name={job.job_title}></Header2>
            <div className="container m-auto grid md:grid-cols-3 my-4 gap-3">
                <div className="border rounded-lg bg-[#7E90FE0D] md:col-span-2 p-8 space-y-4">
                    <p> <span className="font-bold">job_description :</span> {job.job_description}</p>
                    <p> <span className="font-bold">job_responsibility :</span> {job.job_responsibility}</p>
                    <p> <span className=" font-bold">educational_requirements : </span> {job.educational_requirements}</p>
                    <p> <span className="font-bold">experiences:</span> {job.experiences}</p>

                </div>
                <div className="border rounded-lg p-8 bg-[#7E90FE0D] font-bold space-y-5">
                    <p>Job Details</p>
                    <hr />
                    <p>Salary:{job.salary}</p>
                    <p>Job Title :{job.job_title}</p>
                    <br />
                    <p>Contact Information</p>
                    <br />
                    <hr />
                    <p>Phone: {job.contact_information.phone}</p>
                    <p>Email: {job.contact_information.email}</p>
                    <p>Address: {job.contact_information.address}</p>

                    <button onClick={()=>handleClick()} className="btn btn-outline w-full btn-success">Apply Now</button>
                    <ToastContainer />

                </div>
            </div>

        </div>
    );
};

export default JObDetails;