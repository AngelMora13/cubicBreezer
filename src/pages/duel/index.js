import React from "react";

import Cubic from "components/cubic";
import Triangle from "components/triangle";
import LifeBossMeter from "components/bossLife";
import PlayerLifeMeter from "components/playerLife";
import Actionbar from "components/actionbar";
import ActionButtoms from "components/actionButtoms";
import OverlayScreen from "components/overlays";
import Container from "components/container";
import MediaAudio from "components/audio"

import audio from "static/media/Viacheslav.mp3"
function DuelPage() {

    return (  
      <Container>
      <MediaAudio Song={audio} left={0} top={20} />
        <OverlayScreen />
        <LifeBossMeter />
        <Cubic></Cubic>
        <PlayerLifeMeter />
        <Triangle></Triangle>
        <Actionbar></Actionbar>
        <ActionButtoms></ActionButtoms>
      </Container>
    )  
}
export default React.memo(DuelPage);
