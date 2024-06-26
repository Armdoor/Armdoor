import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";


const About = () => {

  return (
     <Container id='about'>
        <Fade direction='down'>
        <TextItem>
            <h1>What I Do? </h1>
        </TextItem>
        </Fade>
        
        <Cards>
        <Fade direction='down'>
            <Card>
                <img src='/images/ios.png' alt='apple'/>
                <Con>
                <h2>iOS Development </h2>  
                <p>Explore the world of iOS development and create powerful, user-friendly applications for Apple devices.</p>
                </Con>
            </Card>
            </Fade>
            <Fade direction='left'>
            <Card>
                <img src='/images/ui.png' alt='apple'/>
                <Con>
                <h2>Web Development</h2>  
                <p>Dive into the realm of web development, crafting seamless user interfaces and building interactive web applications.</p>
                </Con>
            </Card>
            </Fade>
            <Fade direction='up'>
            <Link to = '/Ml'> 
            <Button>
                <Card>
                    <img src='/images/web.png' alt='apple'/>
                    <Con>
                    <h2>Machine Learning and Data Science</h2>  
                    <p>Delve into the fascinating fields of machine learning and data science, extracting insights and creating intelligent systems.</p>
                    </Con>
                </Card>
              </Button>
            </Link>
            </Fade>
        </Cards>
     </Container>
  )
}

export default About

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-image: url('/images/aboutbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    
`;

const TextItem = styled.div`
font-size: 2rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 3rem;
h1{color: white;}

@media only screen and (max-width: 485px){
    font-size: 1.3rem;
    font-weight: 400;
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
}
`;

const Cards = styled.div`
    //margin: 1.5rem;
    width: 100%;
    max-width: 50%;
    text-align: left;
    `;

    const Card = styled.div`
    height: 100%;
    width: 100%;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
  
    img {
      height: auto; /* Adjust the height as needed */
      width: auto; /* Auto width to maintain aspect ratio */
      margin-right: 1rem; /* Add margin to create space between image and text */
    }
  
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  
    @media only screen and (max-width: 485px) {
      img {
        display: none;
      }
    }
  `;

const Con = styled.div`
    display: flex;
    flex-direction: column;
    // h2,
    // p {
    //   margin: 0;
    // }
    h2{
        color: #333333;
    }
    p{
        padding-top: 8px;
    }

    @media only screen and (max-width: 485px) {
        h2{
            font-size: 18px;
        }
        p{
            padding-top: 5px;
            font-size: 12px;

        }
      }
`;


