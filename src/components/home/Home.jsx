import FeatureJob from "../Feturejob/Featurejob";
import Banner from "../banner/Banner";
import Category from "../categorys/Categorys";


const Home = () => {
    return (
        <div className="lg:my-5">
            <Banner></Banner>
            <Category></Category>
            <FeatureJob></FeatureJob>

        </div>
    );
};

export default Home;