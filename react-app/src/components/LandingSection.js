import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Welcome to SCCC";
const bio1 = "Supply Chain Code Club";
const bio2 = "Learning, Progressing, Building...";

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <VStack spacing={8}>
            <VStack spacing={3}>
                <Avatar name="Jeff" src="https://i.pravatar.cc/150?img=10" size="2xl"/>
                <Heading size="md"> {greeting} </Heading>
            </VStack>
                <Heading size="2xl"> {bio1} </Heading>
                <Heading size="2xl"> {bio2} </Heading>
        </VStack>

    </FullScreenSection>
);

export default LandingSection;