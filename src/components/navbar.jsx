import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    createStyles,
    Navbar,
    UnstyledButton,
    Tooltip,
    Title,
    Accordion,
    Checkbox,
    ScrollArea,
} from "@mantine/core";
import {
    Home2,
    User,
    BrandAppleArcade,
    InfoSquare,
    Messages,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
    },

    aside: {
        flex: "0 0 60px",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
    },

    main: {
        flex: 1,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
        height: "100vh",
        paddingTop: 60,
        position: "relative",
    },

    mainLink: {
        width: 44,
        height: 44,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10px",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
        },
    },

    mainLinkActive: {
        "&, &:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 7
            ],
        },
    },

    title: {
        boxSizing: "border-box",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: "0",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.md,
        paddingTop: 18,
        height: 60,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
    },

    logo: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: 60,
        paddingTop: theme.spacing.md,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        marginBottom: theme.spacing.xl,
    },

    link: {
        boxSizing: "border-box",
        display: "block",
        textDecoration: "none",
        borderTopRightRadius: theme.radius.md,
        borderBottomRightRadius: theme.radius.md,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        marginRight: theme.spacing.md,
        fontWeight: 500,
        height: 44,
        lineHeight: "44px",

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
    },

    linkActive: {
        "&, &:hover": {
            borderLeftColor:
                theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 7 : 5
                ],
            backgroundColor:
                theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 7 : 5
                ],
            color: theme.white,
        },
    },

    checkbox: {
        marginBottom: "10px",
    },
}));

const mainLinksMockdata = [
    { icon: Home2, label: "Hjem", to: "/home" },
    { icon: BrandAppleArcade, label: "Spil", to: "/games" },
    { icon: InfoSquare, label: "Omkring os", to: "/about" },
    { icon: Messages, label: "Kontakt", to: "/contact" },
    { icon: User, label: "Konto", to: "/account" },
];

const Filters = [
    {
        label: "Klasseniveau",
        selections: [
            "1. Klasse",
            "2. Klasse",
            "3. Klasse",
            "4. Klasse",
            "5. Klasse",
            "6. Klasse",
            "7. Klasse",
            "8. Klasse",
            "9. Klasse",
            "10. Klasse",
        ],
    },
    {
        label: "Fag",
        selections: [
            "Dansk",
            "Engelsk",
            "Biologi",
            "Kemi",
            "Matematik",
            "Geografi",
        ],
    },
    {
        label: "Kategori",
        selections: [
            "2D",
            "3D",
            "Bilspil",
            "Strategi",
            "Rollespil",
            "Multiplayer",
            "Arkade",
        ],
    },
];

export function DoubleNavbar(props) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState("Hjem");
    const [activeLink, setActiveLink] = useState("Settings");

    useEffect(() => {
        setActive(props.activePage);
    }, [props.activePage]);

    const mainLinks = mainLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionDuration={0}
            key={link.label}
        >
            <UnstyledButton
                onClick={() => {
                    props.setActivePage(link.label);
                    //document.location.href = link.to;
                }}
                className={cx(classes.mainLink, {
                    [classes.mainLinkActive]: link.label === props.activePage,
                })}
                component={Link}
                to={link.to}
            >
                <link.icon />
            </UnstyledButton>
        </Tooltip>
    ));

    const links = Filters.map((link) => (
        <Accordion key={link.label}>
            <Accordion.Item label={link.label}>
                {link.selections.map((selection) => (
                    <Checkbox
                        key={selection}
                        label={selection}
                        className={classes.checkbox}
                        onChange={() => {
                            let tmpFilters = props.filterList;
                            if (tmpFilters.includes(selection)) {
                                tmpFilters = tmpFilters.filter(
                                    (filter) => filter !== selection
                                );
                            } else {
                                tmpFilters = [...tmpFilters, selection];
                            }

                            props.setFilterList(tmpFilters);
                        }}
                    />
                ))}
            </Accordion.Item>
        </Accordion>
    ));

    return (
        // <Navbar height="100%" width={{ sm: 44 }}>
        <Navbar
            height="100%"
            width={active === "Spil" ? { sm: 300 } : { sm: 60 }}
        >
            <Navbar.Section grow className={classes.wrapper}>
                <div className={classes.aside}>
                    <div className={classes.logo}>L</div>
                    {mainLinks}
                </div>
                {active === "Spil" && (
                    <ScrollArea className={classes.main}>
                        <Title order={4} className={classes.title}>
                            Filtre
                        </Title>

                        {links}
                    </ScrollArea>
                )}
            </Navbar.Section>
        </Navbar>
    );
}
