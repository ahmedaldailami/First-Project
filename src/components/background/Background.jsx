import Particles from "./Particles";

const Background = () => {
  return (
    <Particles
      particleColors={["#fff", "#fff"]}
      particleCount={700}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={50}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  );
};
export default Background;
