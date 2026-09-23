import React, { useEffect, useRef } from "react";

export default function WaveBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Smooth mouse coordinates
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      if (!mouse.active) {
        mouse.x = mouse.targetX = width * 0.5;
        mouse.y = mouse.targetY = height * 0.5;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Only track if cursor is within or near the hero section
      if (
        e.clientY >= rect.top - 100 &&
        e.clientY <= rect.bottom + 100 &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
        mouse.targetX = width * 0.5;
        mouse.targetY = height * 0.5;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3D Ribbon wave configuration
    const LINE_COUNT = 34;
    let time = 0;

    const render = () => {
      // Smooth interpolation for mouse movements
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep cyan/blue gradient matching reference image
      // Left deep blue -> bright electric cyan/sky at crest -> deep blue on right
      const gradient = ctx.createLinearGradient(0, height * 0.15, width, height * 0.85);
      gradient.addColorStop(0.0, "rgba(29, 78, 216, 0.45)");   // #1d4ed8 deep blue
      gradient.addColorStop(0.25, "rgba(37, 99, 235, 0.7)");   // #2563eb royal blue
      gradient.addColorStop(0.52, "rgba(56, 189, 248, 0.85)"); // #38bdf8 luminous cyan
      gradient.addColorStop(0.68, "rgba(96, 165, 250, 0.75)"); // #60a5fa sky blue
      gradient.addColorStop(0.85, "rgba(37, 99, 235, 0.6)");   // #2563eb royal blue
      gradient.addColorStop(1.0, "rgba(30, 58, 138, 0.4)");    // #1e3a8a deep blue fade

      // Center the wave nicely in the background
      const centerY = height * 0.46;
      const mouseInfluenceY = (mouse.y - height * 0.5) / (height * 0.5);

      time += 0.011; // Fluid continuous speed

      ctx.save();
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = gradient;
      ctx.shadowColor = "rgba(56, 189, 248, 0.25)";
      ctx.shadowBlur = 4;

      const totalRibbonHeight = Math.min(height * 0.48, 320);

      for (let i = 0; i < LINE_COUNT; i++) {
        // -1 (top line) to +1 (bottom line)
        const lineNorm = (i / (LINE_COUNT - 1)) * 2 - 1;
        const lineYOffset = lineNorm * (totalRibbonHeight * 0.5);

        // Alpha tapering for the top and bottom lines so ribbon fades into dark background
        const edgeFactor = Math.sin((i / (LINE_COUNT - 1)) * Math.PI);
        const alpha = Math.max(0.12, Math.pow(edgeFactor, 0.75) * 0.85);

        ctx.beginPath();
        ctx.globalAlpha = alpha;

        const step = Math.max(5, Math.floor(width / 180));
        let isFirst = true;

        for (let x = -50; x <= width + 50; x += step) {
          const normX = x / width; // 0 to 1

          // 3D Ruled Surface Ribbon Wave equations:
          // Harmonic wave travel
          const wave1 = Math.sin(normX * 3.0 - time) * 65;
          const wave2 = Math.cos(normX * 4.8 - time * 0.8) * 30;
          const wave3 = Math.sin(normX * 1.6 + time * 0.4) * 18;

          // Signature crest arch around 58% width
          const crestEnvelope = Math.exp(-Math.pow((normX - 0.58) / 0.24, 2));
          const crest = -crestEnvelope * 75;

          // 3D twist & perspective foreshortening
          const twistAngle = (normX - 0.58) * 2.0;
          const twistFactor = Math.sin(twistAngle - time * 0.25) * 0.22;
          const effectiveLineOffset =
            lineYOffset * (1 + twistFactor * 0.5) +
            Math.sin(normX * 2.8 + lineNorm * 0.45 - time) * 12;

          // Gentle mouse deflection when hovering
          const distToMouse = Math.hypot(x - mouse.x, centerY + lineYOffset - mouse.y);
          const mouseDeflection =
            Math.exp(-Math.pow(distToMouse / (width * 0.25), 2)) * 18 * mouseInfluenceY;

          const y = centerY + effectiveLineOffset + wave1 + wave2 + wave3 + crest + mouseDeflection;

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
