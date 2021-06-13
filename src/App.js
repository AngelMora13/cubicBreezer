import React, { Suspense } from "react"
import './App.css';
import {Route} from "wouter"

import MainPage from "pages/main"
import Loader from "components/loader"

import {StartPlayProvider} from "context/startPlayContext"
import { BossProvider } from 'context/bossContext';
import { PlayerProvider } from 'context/playerContext';

const GuidePage = React.lazy(()=>import("pages/guide"))
const DuelPage = React.lazy(()=>import("pages/duel"))
function App() {
  return (
    <div className="App">    
    <Suspense fallback={<Loader/>}>
    <StartPlayProvider>
    <BossProvider>
    <PlayerProvider>
      <Route component={DuelPage} path="/Duel"/>
    </PlayerProvider>
    </BossProvider>
      <Route component={MainPage} path="/" />
    </StartPlayProvider>
    <Route component={GuidePage} path="/guide" />
    </Suspense>
    </div>
  );
}

export default App;
