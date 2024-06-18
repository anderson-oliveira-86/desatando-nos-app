import React from "react";
import ImageContainer from "./ImageContainer";
import ArticleContainer from "./ArticleContainer";
import ProfileContainer from "./ProfileContainer";
import ServiceContainer from "./ServiceContainer";


const Home = () => {
    return (
        <div>
            <ImageContainer></ImageContainer>
            <ArticleContainer></ArticleContainer>
            <ProfileContainer></ProfileContainer>
            <ServiceContainer></ServiceContainer>
        </div>
    );
}

export default Home;