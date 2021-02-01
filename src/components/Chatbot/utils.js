export const shouldRender = project => {
  if (!project?.chatbot.enabled) return false;
  if (process.browser) {
    if (window.location.pathname === '/admin') return false;
    if (window.location.pathname.startsWith('/admin/')) return false;
  } else return false;

  return true;
};
