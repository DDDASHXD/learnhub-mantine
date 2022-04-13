import React, { useEffect, useState } from "react";
import { Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    pageHeader: {
        display: "flex",
        flexDirection: "column",
        background: "#E7E7E7",
        padding: "100px 100px",
    },

    subtitle: {
        marginTop: "10px",
        color: "gray",
    },
}));

const PageHeader = (props) => {
    const { classes, cx } = useStyles();
    return (
        <div className={classes.pageHeader}>
            <Title order={1}>{props.title}</Title>
            {props.subTitle && (
                <Title order={4} className={classes.subtitle}>
                    {props.subTitle}
                </Title>
            )}
        </div>
    );
};

export default PageHeader;
