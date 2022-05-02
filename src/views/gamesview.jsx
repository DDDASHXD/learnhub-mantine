import React, { useEffect, useState } from "react";
import {
  Title,
  createStyles,
  Image,
  Text,
  Button,
  ScrollArea,
} from "@mantine/core";
import { MoodSad } from "tabler-icons-react";
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
    image: "https://cdn-dk-hi-me.clio.me/GettyImages-174699523.jpg",
    title: "Dansk spil",
    subtext: "Dansk grammatik spil, med fokus på stavning og sammensatte ord.",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
    title: "Engelsk spil",
    subtext: "Engelsk spil, med simple engelske ord og danske oversætninger",
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
    image: "https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg",
    title: "Matematik spil",
    subtext: "Sjovt matematik spil. Find X, for at komme videre i spillet.",
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
    image:
      "https://www.science.edu/acellus/wp-content/uploads/2016/12/Biology-Gen-Honors-720x380.jpg",
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
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F20%2Fcopenhagen-dk-COPENHAGENTG0721.jpg",
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
};

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
      } else {
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
        {tmpGames.length > 0 ? (
          tmpGames.map((game) => (
            <GameCard
              title={game.title}
              description={game.subtext}
              subject={game.tags[0].label}
              badges={game.tags}
              image={game.image}
              id={game.title}
            />
          ))
        ) : (
          <div>
            <Title order={1}>
              <MoodSad /> Der er ingen spil i denne kategori
            </Title>
          </div>
        )}
      </div>
    </>
  );
};

export default GamesView;
