import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftsideNav from "../../Shared/NavBar/LeftsideNav/LeftsideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSIdeNav from "../../Shared/RightSideNav/RightSIdeNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
           
            <div className="grid grid-col-1 md:grid-cols-4 gap-6 ">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="md:col-span-2">
                 {
                    news.map(anews => <NewsCard
                        key = {anews._id}
                        news ={anews}
                        >
                        
                    </NewsCard>)
                 }
                </div>
                <div>
                    <RightSIdeNav></RightSIdeNav>
                </div>
            </div>
        </div>
    );
};

export default Home;