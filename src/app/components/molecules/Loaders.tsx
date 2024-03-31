"use client"
import { Box, CircularProgress, LinearProgress, Stack, Typography, linearProgressClasses, styled } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Loaders {
  text: string
}

export const LoaderPage = ({ text }: Loaders): JSX.Element => {
  return (
    <Box sx={{ backgroundColor: "#000000", width: "100vw", height: "100vh" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box display={"flex"} flexDirection={"column"} alignItems="center" justifyContent="center" >
        <CircularProgress color="info" size={50} />
        <Typography variant="body2" color="white" textAlign="center" p={2}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export const Spinner = ({ text }: Loaders): JSX.Element => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems="center" justifyContent="center" >
      <CircularProgress color="info" size={50} />
      <Typography variant="body2" color="white" textAlign="center" p={2}>
        {text}
      </Typography>
    </Box>
  )
}



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "14px",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#71717A",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#45D053"
  },
}));

export const Progress = ({ text }: Loaders): JSX.Element => {


  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        const newProgress = Math.min(oldProgress + diff, 100);
        return newProgress;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000000", width: "100vw", height: "100vh" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Image src="/images/fiorel_perfumes_white.png" alt="loading" width={156} height={47} />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={{ xs: "230px", sm: "430px" }} height={"14px"}>
          <Box width={{ xs: "350px", sm: "400px" }} height={"14px"}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Box  >
            <Typography variant="caption" color="white" pl={1}>
              {Math.floor(progress)}%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" color="white" textAlign="center" p={2}>
            {text}
          </Typography>
        </Box>
      </Stack>


    </Box>
  )
}