import React from "react";
import banner from '../assets/ban2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Banner = () => {

  // stars
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#0d47a1",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {

  return (
    <section className="bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-[50]">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="flex justify-center">
            <img src={banner} alt="banner" className="max-w-[60%]  "  />
          </div>
          <h3 className="font-rob text-[80px] text-white font-black leading-5 absolute top-[210px] left-[612px] ">
            Shitab Raihan Nafi
          </h3>
          <p className="font-rob text-[18px] text-white font-[500px] leading-6 absolute top-[265px] left-[762px] ">
            I am an aspiring full-stack web developer
          </p>
          <p className="font-rob text-[18px] text-white font-[500px] leading-6 absolute top-[300px] left-[500px] ">
             I help your business and individuals by developing websites. I build websites to make you successful in the long term.
          </p>
          <div className="flex items-center">
            <p className="font-rob text-[18px] text-white font-[500px] leading-6 absolute top-[330px] left-[814px] ">
              I am an expert on 
            </p>
            <p className="font-rob text-[18px] font-bold text-red-500 leading-6 absolute top-[330px] left-[962px] ">
              <TypeAnimation
                sequence={[
                  'Reactjs', // Types 'One'
                  1000, // Waits 1s
                  'Next.js', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Tailwind CSS', // Types 'One'
                  1000, // Waits 1s
                  'SASS', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Node.js', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'MongoDB', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '18px', display: 'inline-block' }}
              />
            </p>
          </div>
          <button type="button" class="absolute top-[366px] left-[844px] z-10 font-rob text-white bg-red-600 text-[16px] hover:bg-transparent hover:border-red-500 border-[1px] border-transparent hover:border-[1px] duration-300 ease-in-out rounded-[30px]  px-[50px] py-[15px] text-center">
            Contact me
          </button>
        </div>
      </div>
    </section>
  )}
};

export default Banner;
