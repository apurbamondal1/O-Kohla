import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
                <title>O - Kohla | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;