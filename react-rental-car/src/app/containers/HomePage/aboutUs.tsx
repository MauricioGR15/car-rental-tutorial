import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `}
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: 0;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
        margin-left: -50px;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
        margin-left: -50px;
    }

    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-4xl
        text-sm
        md:text-base
        text-gray-600
        font-normal
        mt-4
    `}
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} />
            </CarContainer>
            <InfoContainer>
                <Title>Feel The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, 
                    sit maiores tempore excepturi ratione dicta rem praesentium dignissimos! 
                    Impedit ea, iste harum dolore officiis obcaecati autem quas ipsa sed nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur 
                    illo et recusandae voluptate eum cum, quidem est fugiat iure a eligendi 
                    reprehenderit doloribus officia natus quam distinctio laborum iusto.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}
