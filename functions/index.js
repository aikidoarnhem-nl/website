/**
 * Cloudflare Pages Function — runs only for the bare root path "/".
 *
 * Language routing for the homepage:
 *   0. An explicit switch via `?lang=nl|en` (the language switcher links here)
 *      is persisted as a cookie server-side and then redirected to the clean
 *      destination. This never depends on client-side JavaScript, so toggling
 *      back to Dutch always works even on a stale build or with JS disabled.
 *   1. Otherwise an existing `lang` cookie wins.
 *   2. Otherwise fall back to the browser's Accept-Language header: Dutch
 *      browsers stay on the Dutch homepage ("/"), everyone else is redirected
 *      to the English homepage ("/en").
 *
 * Subpages have no Function, so they are served directly and the switcher
 * works normally there.
 */
export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  // 0. Explicit switch via query param → persist cookie, redirect to clean URL.
  const param = (url.searchParams.get('lang') || '').toLowerCase();
  if (param === 'nl' || param === 'en') {
    const dest = new URL(param === 'en' ? '/en' : '/', url);
    return new Response(null, {
      status: 302,
      headers: {
        Location: dest.toString(),
        'Set-Cookie': `lang=${param}; Path=/; Max-Age=31536000; SameSite=Lax`,
      },
    });
  }

  // 1. Existing explicit choice via cookie wins.
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/(?:^|;\s*)lang=(nl|en)/i);
  const lang = match ? match[1].toLowerCase() : detectLang(request.headers.get('Accept-Language'));

  if (lang === 'en') {
    return Response.redirect(new URL('/en', url), 302);
  }

  // Dutch (or unknown) → serve the static Dutch homepage.
  return next();
}

/**
 * Returns "nl" when Dutch is the visitor's most-preferred language, else "en".
 * Parses Accept-Language q-values, e.g. "nl-NL,nl;q=0.9,en;q=0.8".
 */
function detectLang(acceptLanguage) {
  if (!acceptLanguage) return 'en';
  const top = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)[0];
  return top && top.tag.startsWith('nl') ? 'nl' : 'en';
}
