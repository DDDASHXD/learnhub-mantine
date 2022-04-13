import React from "react";
import { Heart } from "tabler-icons-react";
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles,
    useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        //height: 470,
        display: "flex",
        flexDirection: "column",

        "&.hidden": {
            display: "none",
        },
    },

    section: {
        borderBottom: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: "uppercase",
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },

    description: {
        height: "100%",
    },
}));

export function GameCard(props) {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    const features = props.badges.map((badge) => (
        <Badge
            color={theme.colorScheme === "dark" ? "dark" : "gray"}
            key={badge.label}
        >
            {badge.label}
        </Badge>
    ));

    return (
        <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            id={props.id}
        >
            <Card.Section>
                <Image src={props.image} alt={props.title} height={100} />
            </Card.Section>

            <Card.Section
                className={`${classes.section} ${classes.description}`}
                mt="md"
            >
                <Group position="apart">
                    <Text size="lg" weight={500}>
                        {props.title}
                    </Text>
                    <Badge size="sm">{props.subject}</Badge>
                </Group>
                <Text size="sm" mt="xs" className={classes.description}>
                    {props.description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} color="dimmed">
                    Tags
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                    Start spil
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                    <Heart size={18} className={classes.like} />
                </ActionIcon>
            </Group>
        </Card>
    );
}
