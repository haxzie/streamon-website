/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="haxzie"
      data-description="Support me on Buy me a coffee!"
      data-message="Help us keep this project alive. "
      data-color="#5F7FFF"
      data-position="right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>,
  ])
}
