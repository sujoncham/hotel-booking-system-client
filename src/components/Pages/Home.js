import Banner from "../HomeSection/Banner";
import HomeContact from "../HomeSection/HomeContact";
import HomeProjects from "../HomeSection/HomeProjects";
import Services from "../HomeSection/Services";
import Subscribe from "../HomeSection/Subscribe";
import Testimonials from "../HomeSection/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProjects></HomeProjects>
            <Services></Services>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;