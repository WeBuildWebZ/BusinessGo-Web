export const shouldRender = project => {
  if (process.env.NODE_ENV !== 'development') return false;
  if (!project?.chatbot.enabled) return false;
  if (process.browser) {
    if (window.location.pathname === '/admin') return false;
    if (window.location.pathname.startsWith('/admin/')) return false;
  } else return false;

  return true;
};
