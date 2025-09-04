import { Outlet } from "react-router-dom";
import Particles from "@tsparticles/react";

export default function Layout() {
  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          preset: "stars",
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            size: {
              value: { min: 0.5, max: 1.5 },
            },
            number: {
              value: 150,
            },
          },
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Outlet />
    </>
  );
}
