import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { Clothing } from "./types";
import Phaser from "phaser";
import { AppContainer } from "./ReactApp";

export default class ExternalScene extends window.BaseScene {
  constructor() {
    super({
      name: "local",
      map: {
        padding: [1, 2],
        tilesetUrl:
          "https://sunflower-land.com/testnet-assets/world/map-extruded.png",
      },
      player: {
        spawn: {
          x: 351,
          y: 500,
        },
      },
      mmo: {
        enabled: true,
        url: "ws://localhost:2567/",
        roomId: "local",
        serverId: "community_island",
      },
    });

    ReactDOM.render(
      React.createElement(AppContainer),
      document.getElementById("community-root")
    );
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
  }

  update() {
    super.update();
  }
}

window.ExternalScene = ExternalScene;
