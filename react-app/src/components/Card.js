import { Heading, HStack, Image, Text, Vstack, Box, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-sloid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
    return (
        <div>
            <HStack spacing={3}>
                <Box
                    backgroundColor="white"
                    textColor="black"
                    rounded="3xl"
                    paddingBotton={5}
                >
                    <VStack spacing={3}>
                        <Image src={imgSrc} alt={title} rounded="3xl"/>
                        <Box paddingX={4}>
                            <Heading paddingY={3} size="md">
                                {title}
                            </Heading>
                            <Text>{description}</Text>
                            <HStack spacing={2}> 
                                <Text fontWeight="bold">See More</Text>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
            </HStack>
        </div>
    );
};

export default Card;