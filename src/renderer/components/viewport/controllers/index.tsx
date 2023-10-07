import React from "react";
import SelectionController from "@components/viewport/controllers/selection-controller";
import OrbitController from "@components/viewport/controllers/orbit-controller";
import TransformController from "@components/viewport/controllers/transform-controller";

const Controllers: React.FC<{}> = () => {
  return (
    <>
      <SelectionController />
      <OrbitController />
      <TransformController />
    </>
  );
};

export default Controllers;
