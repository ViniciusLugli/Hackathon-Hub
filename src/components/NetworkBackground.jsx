// src/components/NetworkBackground.jsx
import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const config = {
      pointCount: 80,
      maxDistance: 150,
      pointColor: "#007BFC", // Cor azul para os pontos principais
      secondaryPointColor: "#FFFFFF", // Cor branca para alguns pontos
      lineColor: "rgba(0, 123, 252, 0.2)", // Linha azul mais visível
      lineWidth: 1.5,
    };

    let points = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    }

    function initPoints() {
      points = [];
      for (let i = 0; i < config.pointCount; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          color:
            Math.random() > 0.7
              ? config.secondaryPointColor
              : config.pointColor, // 30% chance de ser branco
        });
      }
    }

    function drawPoints() {
      points.forEach((p) => {
        // Pulsing effect
        const pulse = Math.abs(Math.sin(p.pulse)) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
    }

    function drawLines() {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = config.lineColor;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      }
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      drawLines();
      drawPoints();

      requestAnimationFrame(update);
    }

    resize();
    update();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} />;
}
