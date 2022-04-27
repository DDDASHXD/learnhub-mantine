import React, { useEffect, useState } from "react";
import { Title, createStyles } from "@mantine/core";
import PageHeader from "../components/pageheader";
import CardScroll from "../components/cardscroll";
import { GameCard } from "../components/card";

const useStyles = createStyles((theme) => ({
    homeView: {
        padding: "100px 100px",
    },
}));

const mockData = [
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
];

let tmpMockData = [];

const Home = (props) => {
    const { classes, cx } = useStyles();

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            tmpMockData.push(mockData[0]);
        }
        console.log(tmpMockData);
    }, []);

    return (
        <>
            <PageHeader
                title="Hjem"
                subTitle="Et overblik over dine senest spillede spil, og andre ting du kan gøre."
            />
            <div className={classes.homeView}>
                <CardScroll title="Senest spillede">
                    {mockData.map((game) => (
                        <GameCard
                            key={game.title}
                            image={game.image}
                            title={game.title}
                            description={game.subtext}
                            badges={game.tags}
                            subject={game.subject}
                        />
                    ))}
                </CardScroll>
            </div>
        </>
    );
};

export default Home;
