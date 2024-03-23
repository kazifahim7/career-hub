

const Items = ({ item }) => {
    return (

        <div className="card w-full flex flex-col bg-base-100 shadow-xl duration-1000 hover:scale-90">
            <figure><img src={item.logo} className="  h-52" alt="Shoes" /></figure>
            <div className="card-body  flex-grow">
                <h2 className="card-title">{item.category_name}</h2>
                <p>{item.availability}</p>
            </div>
        </div>


    );
};

export default Items;