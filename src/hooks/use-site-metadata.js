// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;