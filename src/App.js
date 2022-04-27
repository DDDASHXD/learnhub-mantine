import React, {useEffect, useState} from 'react';
import { Button, createStyles, ScrollArea } from '@mantine/core'
import { DoubleNavbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './views/home';
import GamesView from './views/gamesview';
import { FileX } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  app: {
    height: "100vh;",
    display: "flex",
    maxWdith: "100vw",

    '&*': {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    }
  },

  view: {
    width: "100%",
    height: "100vh",
    //overflowY: "scroll"
  }
}))

function App() {
  const [activePage, setActivePage] = useState("Hjem")

  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    if (filterList == []) {
      setFilterList(["Empty"])
    }
  }, [filterList])

  const { classes, cx } = useStyles();
  return (
    <div className={classes.app}>
      <Router>
        <DoubleNavbar
          setActivePage={(string) => setActivePage(string)}
          activePage={activePage}
          setFilterList={(array) => setFilterList(array)}
          filterList={filterList}
        />

        <ScrollArea className={classes.view}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<GamesView filterList={filterList}/>}/>
          </Routes>
        </ScrollArea>
      </Router>
    </div>
  );
}

export default App;
