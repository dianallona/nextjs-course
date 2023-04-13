import Image from "next/image";
import React from "react";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/diana.png"
          alt="Diana Llona"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Diana</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
