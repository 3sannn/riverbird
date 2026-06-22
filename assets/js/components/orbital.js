const TECH_DATA = {
  html5: {
    name: 'HTML5',
    category: 'Frontend',
    description: 'Semantic markup standard for web documents, providing structure, accessibility, and SEO foundations.',
    experience: 'Expert',
    usecases: 'Semantic Web, SPA Structure, SEO Schema Markup',
    related: ['css3', 'javascript'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L2 5l1.8 14.2L12 22l8.2-2.8L22 5zM17.8 8.8h-7.2l-.3 1.8h7.2l-.5 4.8-5 1.7-5-1.7-.3-2.6h1.8l.2 1.4 3.3 1.1 3.3-1.1.3-2.8H7.3l.7-5.4h10.2z"/></svg>`
  },
  css3: {
    name: 'CSS3',
    category: 'Frontend',
    description: 'Advanced responsive presentation sheets, utilizing CSS grid, flexbox, custom variables, and keyframe animations.',
    experience: 'Expert',
    usecases: 'User Interface Design, Animations, Responsive Layouts',
    related: ['html5', 'javascript'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L2 5l1.8 14.2L12 22l8.2-2.8L22 5zM17.3 9.3h-6.7l-.3 1.8h6.7l-.4 3.7-4.6 1.5-4.6-1.5-.2-1.8h1.8l.1.9 3 1 3-1 .2-2.2H7.6l.5-4.4h9.7z"/></svg>`
  },
  javascript: {
    name: 'JavaScript ES6+',
    category: 'Frontend',
    description: 'High-performance scripting language, using modern async/await patterns, ES Modules, and native DOM APIs.',
    experience: 'Expert',
    usecases: 'Interactive Logic, State Management, API Communication',
    related: ['html5', 'css3', 'react', 'typescript'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h18v18H3zm13.3 12.3c-.2-1-.8-1.5-1.8-1.5-1.1 0-1.6.6-1.6 1.5 0 .9.5 1.3 1.6 1.8l1 .4c1.6.6 2.5 1.4 2.5 3.1 0 2-1.6 3.2-3.8 3.2-2.2 0-3.6-1.1-3.9-2.9h2c.2 1 .9 1.4 1.8 1.4 1 0 1.6-.4 1.6-1.2 0-.8-.4-1.1-1.4-1.5l-1-.4c-1.6-.6-2.5-1.4-2.5-3.1 0-1.8 1.4-3.1 3.6-3.1 2 0 3.3 1 3.7 2.7zm-6.2-2.1v9h-2v-9z"/></svg>`
  },
  react: {
    name: 'React',
    category: 'Frontend',
    description: 'Component-driven UI library for building dynamic, single-page client applications with fast virtual rendering.',
    experience: 'Expert',
    usecases: 'SaaS Dashboards, Dynamic Web Applications, Component Systems',
    related: ['typescript', 'graphql', 'javascript'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`
  },
  vue: {
    name: 'Vue.js',
    category: 'Frontend',
    description: 'Progressive, lightweight user interface framework featuring two-way reactive binding and modular composition APIs.',
    experience: 'Intermediate',
    usecases: 'Frontends, Interactive Page Sections, SPAs',
    related: ['javascript', 'typescript'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 3.5h-3.8L12 13.7 5.8 3.5H2l10 17z"/><path d="M18.2 3.5H15l-3 5-3-5H5.8L12 14z"/></svg>`
  },
  typescript: {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strictly typed superset of JavaScript, preventing compiler errors and ensuring type safety on large-scale builds.',
    experience: 'Expert',
    usecases: 'Enterprise Codebases, Scalable Core Libraries, API Contracts',
    related: ['javascript', 'react', 'node'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h18v18H3zm13.8 9H11.5v9h-2v-9H4.6v-2h12.2zM21 16.5c0-1.8-1.5-3-3.6-3-2.1 0-3.6 1.2-3.6 3v4.5h2V16.5c0-.8.6-1.2 1.6-1.2s1.6.4 1.6 1.2v4.5h2z"/></svg>`
  },
  node: {
    name: 'Node.js',
    category: 'Backend',
    description: 'Asynchronous event-driven JavaScript runtime built on Chrome\'s V8 engine, powering scalable network apps.',
    experience: 'Expert',
    usecases: 'REST & GraphQL APIs, Microservices, Real-time Servers',
    related: ['typescript', 'postgresql', 'mongodb', 'redis'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2L3.5 7v10L12 22l8.5-5V7zm-1.5 15.3l-4.5-2.6v-5.2l4.5 2.6zm6-3.4l-4.5 2.6V11.3l4.5-2.6z"/></svg>`
  },
  python: {
    name: 'Python',
    category: 'Backend',
    description: 'High-level general purpose language popular for scripting, automated pipelines, data science, and web APIs.',
    experience: 'Expert',
    usecases: 'Data Analysis, Automation Scripts, AI Integrations, APIs',
    related: ['postgresql', 'mongodb'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2A10 10 0 0 0 2 12c0 2 .5 3.9 1.5 5.5l1.5-1.5A8 8 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8c-2 0-3.9-.7-5.5-2l-1.5 1.5c2 1.6 4.6 2.5 7 2.5a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/></svg>`
  },
  postgresql: {
    name: 'PostgreSQL',
    category: 'Backend',
    description: 'Powerful, open source object-relational database system with strong reliability, SQL compliance, and JSON support.',
    experience: 'Expert',
    usecases: 'Relational Data Storage, User Analytics, Structured Inventories',
    related: ['node', 'python'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>`
  },
  mongodb: {
    name: 'MongoDB',
    category: 'Backend',
    description: 'NoSQL document-oriented database designed for developer agility, flexible BSON schemas, and seamless scaling.',
    experience: 'Expert',
    usecases: 'Content Inventories, Document Storage, Flexible Schemas',
    related: ['node', 'python'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.7 5.3 7 9.3 7 12c0 3 1.3 6 5 10 3.7-4 5-7 5-10 0-2.7-1.7-6.7-5-10z"/></svg>`
  },
  redis: {
    name: 'Redis',
    category: 'Backend',
    description: 'In-memory data structure store used as a distributed, ultra-fast cache, session manager, and message broker.',
    experience: 'Expert',
    usecases: 'Data Caching, Session Management, Real-time Queueing',
    related: ['node'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5zm-10 10l10 5 10-5-10-3zm0 5l10 5 10-5-10-3z"/></svg>`
  },
  graphql: {
    name: 'GraphQL',
    category: 'Backend',
    description: 'Query language and server runtime for APIs, letting clients request exactly the data they need and nothing more.',
    experience: 'Expert',
    usecases: 'Federated APIs, Client Fetching Optimization, High-speed APIs',
    related: ['react', 'node'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><polygon points="12 6.5 17.5 10 17.5 14 12 17.5 6.5 14 6.5 10"/></svg>`
  },
  aws: {
    name: 'AWS',
    category: 'Cloud & DevOps',
    description: 'Comprehensive global cloud services suite, hosting scalable virtual instances, databases, and serverless compute.',
    experience: 'Expert',
    usecases: 'Infrastructure Hosting, Serverless Functions, S3 Storage',
    related: ['docker', 'kubernetes', 'terraform'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.4 13c0-2-1.3-3-3-3-1.6 0-3 1-3 3s1.4 3 3 3c1.7 0 3-1 3-3zm-6-6.5a8.5 8.5 0 0 0-8.5 8.5c0 4.7 3.8 8.5 8.5 8.5a8.4 8.4 0 0 0 7.8-5.3h-2.2a6.2 6.2 0 1 1-5.6-7.4c2.6 0 4.8 1.6 5.6 3.9h2.2A8.4 8.4 0 0 0 13.4 6.5z"/></svg>`
  },
  gcp: {
    name: 'Google Cloud',
    category: 'Cloud & DevOps',
    description: 'Highly secure cloud computing platform popular for container native management, analytical engines, and global scale.',
    experience: 'Intermediate',
    usecases: 'Container Clusters, Big Data Compute, Analytics Pipeline',
    related: ['kubernetes', 'docker'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  docker: {
    name: 'Docker',
    category: 'Cloud & DevOps',
    description: 'Industry standard OS virtualization platform packaging software services inside isolated, portable container boxes.',
    experience: 'Expert',
    usecases: 'Service Containerization, Consistent Dev Environments',
    related: ['aws', 'kubernetes', 'gcp', 'cicd'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="12" y1="3" x2="12" y2="17"/></svg>`
  },
  kubernetes: {
    name: 'Kubernetes',
    category: 'Cloud & DevOps',
    description: 'Open source container orchestration engine automating deployment, cloud scaling, and load-balancing of clusters.',
    experience: 'Expert',
    usecases: 'Cluster Management, High Availability APIs, Cloud Scale',
    related: ['docker', 'aws', 'gcp'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6"/></svg>`
  },
  cicd: {
    name: 'CI/CD',
    category: 'Cloud & DevOps',
    description: 'Continuous Integration and Deployment pipelines automating unit tests, package builds, and instant cloud releases.',
    experience: 'Expert',
    usecases: 'Automated Testing, Production Releases, Code Quality Audits',
    related: ['docker', 'aws'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c2.37 0 4.55-.83 6.27-2.22l-1.42-1.42C15.58 19.34 13.88 20 12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8c0 1.88-.66 3.58-1.76 4.93l1.42 1.42C21.17 16.55 22 14.37 22 12z"/><polyline points="12 8 12 12 15 15"/></svg>`
  },
  terraform: {
    name: 'Terraform',
    category: 'Cloud & DevOps',
    description: 'Infrastructure as Code deployment engine creating cloud resources automatically using standard declaration models.',
    experience: 'Expert',
    usecases: 'Infrastructure Automation, Multi-cloud Provisioning',
    related: ['aws'],
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h10V4H7zM7 20h10v-6H7z"/><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/></svg>`
  }
};

export function initOrbitalSystem() {
  const container = document.querySelector('.orbital-system-container');
  if (!container) return;

  const nodesContainer = container.querySelector('.orbital-nodes-container');
  const svg = container.querySelector('.orbital-connections-svg');
  const infoPanel = container.querySelector('.orbital-info-panel');
  const placeholder = infoPanel.querySelector('.orbital-info-placeholder');
  const content = infoPanel.querySelector('.orbital-info-content');

  const keys = Object.keys(TECH_DATA);
  const totalNodes = keys.length;
  
  // Dimensions and layout variables matching the SVG viewBox (540x540)
  const center = 270;
  const radius = 210;
  
  let currentAngle = 0;
  let isPaused = false;
  let selectedNodeKey = null;

  // Build the node elements
  const nodeElements = keys.map((key, i) => {
    const data = TECH_DATA[key];
    const baseAngle = (i * 360) / totalNodes;

    const el = document.createElement('div');
    el.className = 'orbital-node';
    el.setAttribute('data-tech', key);
    el.innerHTML = `
      <div class="orbital-node-icon">${data.icon}</div>
      <div class="orbital-node-label">${data.name}</div>
    `;

    nodesContainer.appendChild(el);

    el.addEventListener('click', () => {
      if (selectedNodeKey === key) {
        // Deselect
        selectedNodeKey = null;
        placeholder.style.display = 'block';
        content.style.display = 'none';
        drawConnections();
      } else {
        selectedNodeKey = key;
        showInfo(key);
        drawConnections();
      }
      updateActiveStates();
    });

    el.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    el.addEventListener('mouseleave', () => {
      if (!selectedNodeKey) {
        isPaused = false;
      }
    });

    return {
      el,
      key,
      baseAngle: (baseAngle * Math.PI) / 180
    };
  });

  // Pause rotation on orbital system hover
  const sys = container.querySelector('.orbital-system');
  sys.addEventListener('mouseenter', () => { isPaused = true; });
  sys.addEventListener('mouseleave', () => { if (!selectedNodeKey) isPaused = false; });

  // Soft click anchor
  const core = container.querySelector('.orbital-core');
  core.addEventListener('click', () => {
    selectedNodeKey = null;
    isPaused = false;
    placeholder.style.display = 'block';
    content.style.display = 'none';
    updateActiveStates();
    drawConnections();
  });

  function updateActiveStates() {
    nodeElements.forEach(item => {
      item.el.classList.remove('active', 'related');
      if (item.key === selectedNodeKey) {
        item.el.classList.add('active');
      } else if (selectedNodeKey) {
        const activeData = TECH_DATA[selectedNodeKey];
        if (activeData.related.includes(item.key)) {
          item.el.classList.add('related');
        }
      }
    });
  }

  function showInfo(key) {
    const data = TECH_DATA[key];
    placeholder.style.display = 'none';
    content.style.display = 'block';
    
    content.querySelector('.info-title').textContent = data.name;
    content.querySelector('.info-category').textContent = data.category;
    content.querySelector('.info-desc').textContent = data.description;
    content.querySelector('.info-exp').textContent = data.experience;
    content.querySelector('.info-usecases').textContent = data.usecases;

    const relatedTags = content.querySelector('.info-related-tags');
    relatedTags.innerHTML = data.related.map(rKey => {
      const relData = TECH_DATA[rKey];
      return `<span class="related-tag" data-tech="${rKey}">${relData ? relData.name : rKey}</span>`;
    }).join('');

    relatedTags.querySelectorAll('.related-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const k = tag.getAttribute('data-tech');
        selectedNodeKey = k;
        showInfo(k);
        drawConnections();
        updateActiveStates();
      });
    });
  }

  // Draw SVG lines between the selected node and its related nodes
  function drawConnections() {
    svg.innerHTML = '';
    if (!selectedNodeKey) return;

    const activeNode = nodeElements.find(n => n.key === selectedNodeKey);
    if (!activeNode) return;

    const activeData = TECH_DATA[selectedNodeKey];
    
    // Core center coords
    const activeX = center + radius * Math.cos(activeNode.baseAngle + currentAngle);
    const activeY = center + radius * Math.sin(activeNode.baseAngle + currentAngle);

    // Draw connection to the central core first
    const coreLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    coreLine.setAttribute('x1', activeX);
    coreLine.setAttribute('y1', activeY);
    coreLine.setAttribute('x2', center);
    coreLine.setAttribute('y2', center);
    coreLine.setAttribute('class', 'connection-line connection-line-core');
    svg.appendChild(coreLine);

    // Draw connections to related nodes
    activeData.related.forEach(relKey => {
      const relNode = nodeElements.find(n => n.key === relKey);
      if (!relNode) return;

      const relX = center + radius * Math.cos(relNode.baseAngle + currentAngle);
      const relY = center + radius * Math.sin(relNode.baseAngle + currentAngle);

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', activeX);
      line.setAttribute('y1', activeY);
      line.setAttribute('x2', relX);
      line.setAttribute('y2', relY);
      line.setAttribute('class', 'connection-line');
      svg.appendChild(line);
    });
  }

  // Main animation frame loop
  function tick() {
    if (!isPaused) {
      currentAngle += 0.002; // Very slow rotation: ~20-30 seconds per revolution
      
      // Update node DOM positions
      nodeElements.forEach(item => {
        const angle = item.baseAngle + currentAngle;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        
        // Express position in percentages of the 540x540 canvas to support scale responsiveness
        const pctX = (x / 540) * 100;
        const pctY = (y / 540) * 100;

        item.el.style.left = `${pctX}%`;
        item.el.style.top = `${pctY}%`;
      });

      // Update lines dynamically if rotation is moving (usually paused when clicked, but safe to update)
      if (selectedNodeKey) {
        drawConnections();
      }
    }
    requestAnimationFrame(tick);
  }

  // Kick off the loop
  tick();
}
