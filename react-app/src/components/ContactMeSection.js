import React from "react";
import { useFormik } from "formik";
import {
    Box,
    Button, 
    FormControl,
    FormMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "", 
            email: "", 
            type: "",
            comment: "",
        }, 
        onSubmit: (values) => {
            submit(values.firstName); 
            formik.resetForm();
        }, 
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            type: Yup.string(),
            comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack>
                <Heading>
                </Heading>
                <Box>
                    <form onSubmit={formik.handleSubmit}>

                        <VStack>
                            <FormControl>
                                <FormLabel></FormLabel>
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel></FormLabel>
                                <Input/>
                                <FormErrorMessage></FormErrorMessage>                
                            </FormControl>
                            <FormControl>
                                <FormLabel></FormLabel>
                                <Textarea/>
                                <FormErrorMessage></FormErrorMessage>                
                            </FormControl>
                            <Button>
                            </Button>
                        </VStack>

                    </form>

                </Box>

            </VStack>


        </FullScreenSection>
    )


}