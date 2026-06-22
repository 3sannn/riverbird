export function initLiquidBackground() {
  const canvas = document.querySelector('.liquid-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let targetMouseX = -1000;
  let targetMouseY = -1000;
  let currentMouseX = -1000;
  let currentMouseY = -1000;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    targetMouseX = e.clientX - rect.left;
    targetMouseY = e.clientY - rect.top;
  });

  document.addEventListener('mouseleave', () => {
    targetMouseX = -1000;
    targetMouseY = -1000;
  });

  class Blob {
    constructor(width, height, isMouse = false) {
      this.isMouse = isMouse;
      this.radius = isMouse ? 130 : Math.random() * 140 + 110;
      this.x = Math.random() * (width - this.radius * 2) + this.radius;
      this.y = Math.random() * (height - this.radius * 2) + this.radius;
      this.vx = isMouse ? 0 : (Math.random() - 0.5) * 0.7;
      this.vy = isMouse ? 0 : (Math.random() - 0.5) * 0.7;
      this.morphSpeed = Math.random() * 0.6 + 0.3;
      this.morphAmount = Math.random() * 30 + 15;
      this.seed = Math.random() * 100;
      
      this.color = isMouse 
        ? 'rgba(245, 93, 45, 0.38)' 
        : [
            'rgba(245, 93, 45, 0.22)',
            'rgba(212, 238, 54, 0.14)',
            'rgba(7, 0, 255, 0.06)'
          ][Math.floor(Math.random() * 3)];
    }

    update(width, height) {
      if (this.isMouse) {
        if (targetMouseX > -500) {
          currentMouseX += (targetMouseX - currentMouseX) * 0.07;
          currentMouseY += (targetMouseY - currentMouseY) * 0.07;
          this.x = currentMouseX;
          this.y = currentMouseY;
        } else {
          this.x = -1000;
          this.y = -1000;
        }
        return;
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x - this.radius < 0 && this.vx < 0) this.vx *= -1;
      if (this.x + this.radius > width && this.vx > 0) this.vx *= -1;
      if (this.y - this.radius < 0 && this.vy < 0) this.vy *= -1;
      if (this.y + this.radius > height && this.vy > 0) this.vy *= -1;
    }

    draw(context) {
      if (this.isMouse && this.x < -500) return;

      context.beginPath();
      const numPoints = 16;
      const time = Date.now() * 0.001 * this.morphSpeed;
      
      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const offset = Math.sin(angle * 3 + time + this.seed) * Math.cos(angle * 2 - time) * this.morphAmount;
        const r = this.radius + offset;
        const x = this.x + Math.cos(angle) * r;
        const y = this.y + Math.sin(angle) * r;
        
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    }
  }

  class EnergyNode {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 40 + 30;
      this.color = 'rgba(245, 93, 45, 0.12)';
      this.speed = Math.random() * 0.2 + 0.08;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.008;
    }

    update(width, height) {
      this.angle += this.spin;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      if (this.x < -50) this.x = width + 50;
      if (this.x > width + 50) this.x = -50;
      if (this.y < -50) this.y = height + 50;
      if (this.y > height + 50) this.y = -50;
    }

    draw(context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.fill();
    }
  }

  const blobs = [];
  const blobCount = 6;
  for (let i = 0; i < blobCount; i++) {
    blobs.push(new Blob(canvas.width, canvas.height));
  }

  const mouseBlob = new Blob(canvas.width, canvas.height, true);
  blobs.push(mouseBlob);

  const energyNodes = [];
  const nodeCount = 10;
  for (let i = 0; i < nodeCount; i++) {
    energyNodes.push(new EnergyNode(canvas.width, canvas.height));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    blobs.forEach(blob => {
      blob.update(canvas.width, canvas.height);
      blob.draw(ctx);
    });

    energyNodes.forEach(node => {
      node.update(canvas.width, canvas.height);
      node.draw(ctx);
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
