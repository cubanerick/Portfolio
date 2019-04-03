/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    
    createRedirect({ fromPath: "http://erickecheverria.com", toPath: "https://erickecheverria.tech", isPermanent: true , force: true})
    createRedirect({ fromPath: "https://erickecheverria.com", toPath: "https://erickecheverria.tech", isPermanent: true , force: true})
    createRedirect({ fromPath: "https://www.erickecheverria.com", toPath: "https://erickecheverria.tech", isPermanent: true , force: true})
}