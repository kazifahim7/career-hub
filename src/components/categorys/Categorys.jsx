import { useEffect, useState } from "react";
import Items from "./Items";


const Category = () => {
    const [category, setCateGory] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCateGory(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid lg:grid-cols-4 gap-5 my-5  mx-3">
                {
                    category.map((item) => <Items key={item.id} item={item}></Items>)
                }
            </div>

        </div>
    );
};

export default Category;