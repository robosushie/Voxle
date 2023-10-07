import {
  Camera,
  Grid,
  Lights,
  Loader,
  Gizmo,
  Controllers,
  Stats,
  Axis,
} from "@components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

// import { Stats } from "@react-three/drei";
// import { Stats as Stats1 } from "@components/viewport";

import {
  DepthOfField,
  EffectComposer,
  SMAA,
} from "@react-three/postprocessing";
import { Outline } from "@react-three/postprocessing";
import EditorPanel from "@/renderer/components/panels/editor-panel";

const Viewport: React.FC<{ className: string }> = ({ className }) => {
  return (
    <main id="viewport" className={className}>
      <EditorPanel />
      <Canvas
        className="w-full h-full bg-viewport-base-color rounded"
        gl={{ antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Loader />
        <Lights />
        <Camera />
        <Stats />
        <Grid />
        <Controllers />
        <Gizmo />
        <Axis />
      </Canvas>
    </main>
  );
};

export default Viewport;
