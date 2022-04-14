import React, { useEffect, useState } from "react";
import {
    Title,
    createStyles,
    Image,
    Text,
    Button,
    ScrollArea,
} from "@mantine/core";
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
        tags: [{ label: "3d" }, { label: "rollespil" }, { label: "1. klasse" }],
        subject: "dansk",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Engelsk spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["2d", "racing", "1-grade"],
        tags: [{ label: "2d" }, { label: "arkade" }, { label: "1. klasse" }],
        subject: "engelsk",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Matematik spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["roleplay", "racing", "7-grade"],
        tags: [
            { label: "rollespil" },
            { label: "bilspil" },
            { label: "7. klasse" },
        ],
        subject: "matematik",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Biologi spil",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        // tags: ["2d", "racing", "1-grade"],
        tags: [{ label: "2d" }, { label: "bilspil" }, { label: "1. klasse" }],
        subject: "biologi",
    },
    {
        image: "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        title: "Dansk spil 2",
        subtext:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae illum ullam dicta, eos, eligendi ea pariatur delectus quo quidem a quisquam molestias fuga natus facilis officiis harum ad magnam?",
        //tags: ["2d", "racing", "1-grade", "AAAAAAAA"],
        tags: [{ label: "2d" }, { label: "bilspil" }, { label: "7. klasse" }],
        subject: "dansk",
    },
];

const GamesView = (props) => {
    const [count, setCount] = useState(0);
    const [tmpGames, setTmpGames] = useState(games);

    useEffect(() => {
        if (props.filterList.length > 0) {
            let tmp = [];
            if (props.filterList.length == 1) {
                for (let i = 0; i < games.length; i++) {
                    for (let j = 0; j < props.filterList.length; j++) {
                        if (
                            games[i].subject ===
                            props.filterList[j].toLowerCase()
                        ) {
                            tmp.push(games[i]);
                        }

                        for (let l = 0; l < games[i].tags.length; l++) {
                            if (
                                games[i].tags[l].label ===
                                props.filterList[j].toLowerCase()
                            ) {
                                tmp.push(games[i]);
                            }
                        }
                    }
                }
            } else {
                for (let i = 0; i < tmpGames.length; i++) {
                    for (let j = 0; j < props.filterList.length; j++) {
                        if (
                            tmpGames[i].subject ===
                            props.filterList[j].toLowerCase()
                        ) {
                            tmp.push(tmpGames[i]);
                        } else {
                            for (let l = 0; l < tmpGames[i].tags.length; l++) {
                                if (
                                    tmpGames[i].tags[l].label ===
                                    props.filterList[j].toLowerCase()
                                ) {
                                    tmp.push(tmpGames[i]);
                                }
                            }
                        }
                    }
                }
            }
            // Remove duplicates
            for (let n = 0; n < tmp.length; n++) {
                for (let m = n + 1; m < tmp.length; m++) {
                    if (tmp[n].title === tmp[m].title) {
                        tmp.splice(m, 1);
                    }
                }
            }

            setTmpGames(tmp);
        } else {
            setTmpGames(games);
        }
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
                        subject={game.subject}
                        //badges={game.tags.map((tag) => [{ label: tag }])}
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
