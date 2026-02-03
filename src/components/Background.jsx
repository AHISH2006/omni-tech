import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import alienBg from "../assets/alien-x-new.png";

const Background = () => {
  const canvasRef = useRef(null);

  // Parallax mouse tracking for Alien X
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  const moveX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: null,
      y: null,
      radius: (width / 80) * (height / 80),
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      mouse.radius = (width / 80) * (height / 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const particlesArray = [];
    const numberOfParticles = 200;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 40 + 5;
        this.color = '#22c55e'; // Omnitrix green

        // Autonomous movement
        this.vx = (Math.random() - 0.5) * 0.5; // velocity x
        this.vy = (Math.random() - 0.5) * 0.5; // velocity y
        this.drift = Math.random() * 0.02; // drift speed
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;

        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius && mouse.x !== null) {
          this.x -= directionX;
          this.y -= directionY;
          this.color = '#10b981'; // Brighter green on hover
        } else {
          // Autonomous floating movement
          this.baseX += this.vx;
          this.baseY += this.vy;

          // Wrap around screen edges
          if (this.baseX > width) this.baseX = 0;
          if (this.baseX < 0) this.baseX = width;
          if (this.baseY > height) this.baseY = 0;
          if (this.baseY < 0) this.baseY = height;

          // Return to moving base position
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
          this.color = '#22c55e'; // Revert to default green
        }
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        particlesArray.push(new Particle(x, y));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            ((particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
              (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y));
          if (distance < (width / 7) * (height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacityValue * 0.3})`; // Green connecting lines
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
    };

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Alien X Background */}
      <motion.img
        src={alienBg}
        alt="Alien X"
        className="home-alien-image"
        style={{ x: moveX, y: moveY, rotateX, rotateY }}
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "brightness(0.7) contrast(1.1)",
            "brightness(1) contrast(1.2)",
            "brightness(0.7) contrast(1.1)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        onMouseMove={handleMouseMove}
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
    </>
  );
};

export default Background;  
