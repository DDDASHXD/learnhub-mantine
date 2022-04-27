import React, { useEffect, useState } from "react";
import { Title, createStyles, ScrollArea } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    main: {
        background: "red",
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    scrollArea: {
        display: "flex",
        flexDirection: "row",
        width: "max-content",
        overflow: "hidden",
    },
}));

const CardScroll = (props) => {
    const { classes, cx } = useStyles();

    return (
        <div className={classes.main}>
            <Title order={1}>{props.title}</Title>
            <ScrollArea style={{ width: "100%" }}>
                <div className={classes.scrollArea}>{props.children}</div>
            </ScrollArea>
        </div>
    );
};

export default CardScroll;
