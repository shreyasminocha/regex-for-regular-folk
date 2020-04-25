import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = (props) => {
    const { title, description } = props;
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}

            <meta property="og:type" content="book" />

            <meta name="description" content={seo.description} />
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

SEO.defaultTypes = {
    title: "",
};

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
            }
        }
    }
`;
