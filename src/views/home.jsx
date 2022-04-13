import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import PageHeader from "../components/pageheader";

const Home = (props) => {
    return (
        <>
            <PageHeader
                title="Hjem"
                subTitle="Et overblik over dine senest spillede spil, og andre ting du kan gøre."
            />
        </>
    );
};

export default Home;
