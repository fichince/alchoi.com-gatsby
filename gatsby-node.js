const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const component = path.resolve('src/components/common/BlogTagIndex.jsx');

  const result = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `);

  const tags = result.data.allMdx.distinct;

  tags.forEach((tag) => {
    const p = `/blog/tag/${tag}`;
    reporter.info(`Creating page at ${p}`);
    createPage({
      path: p,
      component,
      context: {
        tag
      }
    });
  });

};