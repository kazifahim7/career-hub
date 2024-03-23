import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJOb } from "../../utility/local";
import Header2 from "../job Details/Header2";
import Card from "./Card";


const Applied = () => {
    const [job, setJob] = useState([])
    const [newJOb,setNewJOb]=useState([])

    const handleClick = text =>{
        if(text==='all'){
            setNewJOb(job)
        }
        else if(text === 'remote'){
            const remoteJOb = job.filter((jobs) => jobs.remote_or_onsite ==='Remote');
            setNewJOb(remoteJOb);
        }
        else if(text==='onsite'){
            const onsite = job.filter((onsiteJOb) => onsiteJOb.remote_or_onsite ==='Onsite');
            setNewJOb(onsite);
        }
    }

    const jobs = useLoaderData()
    useEffect(() => {
        const storeId = getAppliedJOb()
        if (jobs.length > 0) {
            const macthJob = jobs.filter((job) => storeId.includes(job.id))
            setJob(macthJob);
            setNewJOb(macthJob);

        }
    }, [jobs])
    return (
        <div>
            <Header2 name={'Applied JOB'}></Header2>
            <div className="items-end flex justify-end container mx-auto">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter BY</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                        <li onClick={() => handleClick('all')}><a>All</a></li>
                        <li onClick={() => handleClick('remote')}><a>Remote</a></li>
                        <li onClick={() => handleClick('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div className="container my-4 mx-auto space-y-6">
                {
                    newJOb.map((work) => <Card key={work.id} job={work}></Card>)
                }
            </div>


        </div>
    );
};

export default Applied;