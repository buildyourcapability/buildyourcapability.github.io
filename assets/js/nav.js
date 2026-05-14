// Active-link highlighting for the primary nav.
// Tracks which #section the user is currently reading, including the
// bottom-of-page edge case where the last section can't fully scroll to top.
(() => {
  const links = Array.from(document.querySelectorAll('#primary-nav a[href^="#"]'));
  const entries = links
    .map(link => ({ link, section: document.getElementById(link.getAttribute('href').slice(1)) }))
    .filter(e => e.section);
  if (entries.length === 0) return;

  const setActive = (link) => {
    links.forEach(a => a.removeAttribute('aria-current'));
    if (link) link.setAttribute('aria-current', 'true');
  };

  // Active marker sits at the scroll-padding-top line — the same line anchor
  // jumps land sections at. +1 keeps the freshly-scrolled-to section "active"
  // instead of the one just above it.
  const activationY = () => {
    const padTop = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
    return window.scrollY + (Number.isFinite(padTop) ? padTop : 96) + 1;
  };

  const update = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      setActive(entries[entries.length - 1].link);
      return;
    }
    const y = activationY();
    let current = null;
    for (const { link, section } of entries) {
      if (section.offsetTop <= y) current = link;
    }
    setActive(current);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
