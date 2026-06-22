
export function getBasePath() {
  const baseAttr = document.documentElement.getAttribute('data-base');
  if (baseAttr === null) {
    return '';
  }
  return baseAttr;
}

export function resolvePath(path) {
  const base = getBasePath();

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `${base}${cleanPath}`;
}
