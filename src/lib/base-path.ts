const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function isLocalAbsolutePath(value: string) {
  return value.startsWith("/") && !value.startsWith("//");
}

function splitSuffix(value: string) {
  const suffixIndex = value.search(/[?#]/);

  if (suffixIndex === -1) {
    return [value, ""] as const;
  }

  return [value.slice(0, suffixIndex), value.slice(suffixIndex)] as const;
}

function addBasePath(pathname: string, suffix = "") {
  if (!basePath || pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return `${pathname}${suffix}`;
  }

  return `${basePath}${pathname}${suffix}`;
}

export function routePath(href: string) {
  if (!isLocalAbsolutePath(href)) {
    return href;
  }

  const [pathname, suffix] = splitSuffix(href);
  const normalizedPath =
    pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;

  return addBasePath(normalizedPath, suffix);
}

export function publicPath(src: string) {
  if (!isLocalAbsolutePath(src)) {
    return src;
  }

  const [pathname, suffix] = splitSuffix(src);

  return addBasePath(pathname, suffix);
}

export function stripBasePath(pathname: string) {
  if (!basePath) {
    return pathname;
  }

  if (pathname === basePath) {
    return "/";
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }

  return pathname;
}
