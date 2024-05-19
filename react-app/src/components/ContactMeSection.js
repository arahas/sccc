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
    VStac,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";