import React from "react";
import * as BABYLON from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import "../App.css";

function BabylonScene() {
  const [FPS, setFPS] = React.useState(0);
  let box;
  let ground;
  let skull;

  const onSceneReady = (scene) => {
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      1,
      15,
      new BABYLON.Vector3.Zero(),
      scene
    );
    camera.lowerBetaLimit = (Math.PI / 2) * 0.6;
    camera.upperBetaLimit = (Math.PI / 2) * 0.85;
    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = 100;

    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);

    var light = new BABYLON.SpotLight(
      "*spot00",
      new BABYLON.Vector3(50, 50, 0),
      new BABYLON.Vector3(-1, -1, 0),
      5,
      30,
      scene
    );
    light.intensity = 0.8;
    var light1 = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light1.position = new BABYLON.Vector3(0, 50, 0);
    light1.intensity = 0.3;

    // box = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);
    // box.position.y = 2;
    // box.material = new BABYLON.StandardMaterial("material1", scene);
    // box.material.diffuseColor = BABYLON.Color3.Random();
    // box.material.alpha = 1;

    ground = BABYLON.MeshBuilder.CreateGround(
      "ground",
      { width: 500, height: 500 },
      scene,
      false
    );
    ground.material = new BABYLON.StandardMaterial("materialGround", scene);
    ground.material.diffuseTexture = new BABYLON.Texture(
      "./textures/grass.png",
      scene
    );
    ground.material.alpha = 1;
    ground.receiveShadows = true;
    ground.material.specularColor = new BABYLON.Color3(0, 0, 0);

    // light.includedOnlyMeshes.push(box);
    light.includedOnlyMeshes.push(ground);

    var shadowGenerator = new BABYLON.ShadowGenerator(512, light);
    // shadowGenerator.getShadowMap().renderList.push(box);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurBoxOffset = 2.0;

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        skull = newMeshes[0];
        camera.target = skull;
        skull.position = new BABYLON.Vector3(0, 15, 0);
        skull.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull);
        shadowGenerator.getShadowMap().renderList.push(skull);
      }
    );

    //**
    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(-5, 5, -5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(-5, 5, 5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(5, 5, -5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(5, 5, 5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );
    /**
    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(-15, 5, -5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(-15, 5, 5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(15, 5, -5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "./scenes/skull.babylon",
      "",
      scene,
      function (newMeshes) {
        let skull2 = newMeshes[0];
        skull2.position = new BABYLON.Vector3(15, 5, 5);
        skull2.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        light.includedOnlyMeshes.push(skull2);
        shadowGenerator.getShadowMap().renderList.push(skull2);
      }
    );
    // */
  };

  /**
   * Will run on every frame render.  We are spinning the skull on y-axis.
   */
  const onRender = (scene) => {
    setFPS(() => scene.getEngine().getFps().toFixed() + " fps");
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();
    const rpm = 10;
    if (box !== undefined) {
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
    if (skull !== undefined) {
      skull.rotation.y -= (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  };

  return (
    <div id="scene">
      <h1 id="fps">{FPS}</h1>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
    </div>
  );
}

export default BabylonScene;
