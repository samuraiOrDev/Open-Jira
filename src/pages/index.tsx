import { NextPage } from "next";

import { Typography } from "@mui/material";
import { Layout } from "@/components";


interface Props { }
const HomePage: NextPage<Props> = () => {
  return (

    <Layout>
      <Typography variant="h1" color='primary'>Hola Mundo</Typography>
    </Layout>

  )
}

export default HomePage;