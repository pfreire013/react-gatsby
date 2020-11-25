import React from 'react'
import { TestimonialsContainer, TopLine, Description, ContentWrapper, ColumnOne, Testimonial, ColumnTwo, Image } from './TestimonialsStyles'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
      name: {in: ["boy", "girl"]}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  } 
  `)



  return (
    <TestimonialsContainer>
      <TopLine>
        Testimonials
      </TopLine>
      <Description>
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
              color: #3fffa8; 
              font-size: 2rem; 
              margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michaels</h3>
            <p>"The greast experience my life! It was so much fun exploring the mountains and they made it super easy to book my trip and accommodation.</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
            color: #f9b19b; 
            font-size: 2rem; 
            margin-bottom: 1rem;
            `}
            />
            <h3>Sarah Kin</h3>
            <p>"The greast experience my life! It was so much fun exploring the mountains and they made it super easy to book my trip and accommodation.</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {
            data.allFile.edges.map((image, index) => (
              <Image
                key={index}
                fluid={image.node.childImageSharp.fluid}
              />
            ))
          }
          <Image />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
