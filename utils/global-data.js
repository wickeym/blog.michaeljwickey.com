export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : "Michael's Blog";
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "I don't like writing, but I love sharing things that cause me to wonder in fascination.";
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Stay blessed, be blessed!';

  return {
    name,
    blogTitle,
    footerText,
  };
};
