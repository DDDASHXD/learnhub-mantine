import React, { useEffect, useState } from "react";
import {
    Title,
    createStyles,
    Image,
    Text,
    Button,
    ScrollArea,
} from "@mantine/core";
import data from "../data/games.json";
import PageHeader from "../components/pageheader";
import { GameCard } from "../components/card";

const useStyles = createStyles((theme) => ({
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 40,
        padding: "100px 100px",
    },
    gridItem: {
        background: "#e7e7e7",
        padding: 10,
        height: 400,
        borderRadius: 5,
        position: "relative",
        paddingTop: 160,
    },
    img: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 150,
        borderRadous: 5,
    },
    text: {
        marginBottom: 40,
    },
}));

let games = [
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Dansk spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["3d", "racing", "1-grade"],
        tags: [
            { label: "Dansk" },
            { label: "3D" },
            { label: "Rollespil" },
            { label: "1. Klasse" },
        ],
        subject: "Dansk",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Engelsk spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["2d", "racing", "1-grade"],
        tags: [
            { label: "Engelsk" },
            { label: "2D" },
            { label: "Arkade" },
            { label: "1. Klasse" },
        ],
        subject: "Engelsk",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Matematik spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["roleplay", "racing", "7-grade"],
        tags: [
            { label: "Matematik" },
            { label: "Rollespil" },
            { label: "Bilspil" },
            { label: "7. Klasse" },
        ],
        subject: "Matematik",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Biologi spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["2d", "racing", "1-grade"],
        tags: [
            { label: "Biologi" },
            { label: "2D" },
            { label: "Bilspil" },
            { label: "1. Klasse" },
        ],
        subject: "Biologi",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Dansk spil 2",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        //tags: ["2d", "racing", "1-grade", "AAAAAAAA"],
        tags: [
            { label: "Dansk" },
            { label: "2D" },
            { label: "Bilspil" },
            { label: "7. Klasse" },
        ],
        subject: "Dansk",
    },
];

const includesAll = (checkArray = [], match = []) => {
    for (const currentMatch of match) {
        if (!checkArray.includes(currentMatch)) {
            return false;
        }
    }
    return true;
}

const GamesView = (props) => {
    const [count, setCount] = useState(0);
    const [tmpGames, setTmpGames] = useState(games);

    useEffect(() => {
        let tmpGames = [];
        for (const game of games) {
            const tagArray = [];
            for (const tag of game.tags) {
                tagArray.push(tag.label);
            }
            if (props.filterList.length > 0) {
                if (includesAll(tagArray, props.filterList)) {
                    tmpGames.push(game);
                }
            }
            else {
                tmpGames = games;
            }
        }
        setTmpGames(tmpGames);

    }, [props.filterList]);

    const { classes, ctx } = useStyles();
    return (
        <>
            <PageHeader title="Spil" subTitle="En liste over vores spil" />
            <div className={classes.grid}>
                {tmpGames.map((game) => (
                    <GameCard
                        title={game.title}
                        description={game.subtext}
                        subject={game.tags[0].label}
                        badges={game.tags}
                        image={game.image}
                        id={game.title}
                    />
                ))}
            </div>
        </>
    );
};

export default GamesView;
