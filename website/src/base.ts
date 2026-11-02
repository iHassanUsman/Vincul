/** Prefix public assets for GitHub Pages (or any non-root base). */
const IMAGE_FALLBACK_BASE =
  'https://raw.githubusercontent.com/iHassanUsman/WorkSpace-FA/cursor/vincul-agency-site-f5ed/website/public/images/'

export function asset(path: string): string {
  const clean = path.replace(/^\//, '')

  // Binary JPGs could not be uploaded via GitHub MCP (text Contents API).
  // Temporarily load from the WorkSpace-FA branch that already has the images.
  if (clean.startsWith('images/') && /\.(jpe?g|png|webp)$/i.test(clean)) {
    const filename = clean.slice('images/'.length)
    return `${IMAGE_FALLBACK_BASE}${filename}`
  }

  const base = import.meta.env.BASE_URL || '/'
  return `${base}${clean}`
}
