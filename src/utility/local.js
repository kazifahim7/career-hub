

const getAppliedJOb =()=>{
    const jobApplication = localStorage.getItem('jobId')
    if(jobApplication){
        return JSON.parse(jobApplication)
    }
    else{
        return []
    }

}

const setJob = id=>{
    const storeJob = getAppliedJOb()
    const same = storeJob.find((job)=>job===id)
    if(!same){
        storeJob.push(id)
        localStorage.setItem('jobId',JSON.stringify(storeJob))
    }

}
export {setJob,getAppliedJOb}