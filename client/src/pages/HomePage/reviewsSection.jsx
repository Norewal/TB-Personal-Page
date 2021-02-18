import React from 'react'
import styled from 'styled-components'
import ContainerBox from '../../components/container/container'
import Titles from '../../components/Titles/Titles';
import { Element } from "react-scroll";
import ReviewCard from '../Reviews/reviewCard';
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { theme } from '../../theme';
import User1Img from "../../components/images/user1.png";
import User2Img from "../../components/images/user2.png";
import User3Img from "../../components/images/user3.png";
import User4Img from "../../components/images/user4.png";
import { useMediaQuery } from "react-responsive";


const ReviewsContainer = styled(Element)`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;
    .carousel__dot-group {
        display: flex;
        justify-content: center;
    }
    
    @media screen and (max-width: 480px) {
        
    }
`;

const StyledSlide = styled(Slide)`
    .carousel__dot-group.sc-cBNfnY.TavEQ {
        
    }
    p {
        font-size: 16px;
        
    }
    .kLMkfd {
        width: 90%;
    }
`;

const StyledReviewCard = styled(ReviewCard)`
    
`;

const StyledDotGroup = styled(DotGroup)`
    button {
        width: 50px;
        height: 10px;
        border-radius: 3px;
        background-color: #e4e4e4;
        border: none;
        outline: none;
        margin: 0 5px;
        &::not(::last-of-type) {
            margin-left: 3px;
        }
    }
    .carousel__dot--selected {
        background-color: ${theme.secondary};
    }
    
`;


export default function ReviewsSection(props) {

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

    return (
        <div>
        <Element name="reviewsSection">
            <ContainerBox>
                <Titles>What others are saying about me</Titles>
                <ReviewsContainer>
                    <StyledCarouselProvider 
                    naturalSlideWidth={200} 
                    naturalSlideHeight={isMobile ? 220 : 160} 
                    totalSlides={4} 
                    visibleSlides={isMobile ? 1 : 2}
                    dragEnabled={true}
                    >
                        <Slider>
                            <StyledSlide index={0} >
                                <StyledReviewCard
                                reviewText="Cat ipsum dolor sit amet, meow all night always ensure to lay down in such a manner that tail can lightly brush human's nose stare at guinea pigs." 
                                username="Alice Cooper" 
                                userJob="Blabla Kft." 
                                userImgURL={User1Img}
                                />
                            </StyledSlide>
                            <StyledSlide index={1}>
                                <StyledReviewCard
                                reviewText="Cat ipsum doloCat ipsum dolor sCat ipsum dolor sr sit amet, meow all night always ensure to lay down in such a manner that tail can lightly brush human's nose stare at guinea pigs." 
                                username="Chris Morales" 
                                userJob="Blabla Kft." 
                                userImgURL={User2Img}
                                />
                            </StyledSlide>
                            <StyledSlide index={2}>
                                <StyledReviewCard
                                reviewText="Cat ipsum dolor sit amet, meow all night always ensure to lay down in such a manner that tail can lightly brush human's nose stare at guinea pigs." 
                                username="Alice Cooper" 
                                userJob="Blabla Kft." 
                                userImgURL={User3Img}
                                />
                            </StyledSlide>
                            <StyledSlide index={3}>
                                <StyledReviewCard
                                reviewText="Cat ipsum dolor sit amet, meow all night always ensure to lay down in such a manner that tail can lightly brush human's nose stare at guinea pigs." 
                                username="Chris Morales" 
                                userJob="Blabla Kft." 
                                userImgURL={User4Img}
                                />
                            </StyledSlide>
                        </Slider>
                        <StyledDotGroup />
                    </StyledCarouselProvider>
                    
                </ReviewsContainer>
                </ContainerBox>
        </Element>   
        </div>
    )
}
