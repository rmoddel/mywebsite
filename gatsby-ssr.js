/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
export function onRenderBody(
  { setHeadComponents }) {
  setHeadComponents([
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>,
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbqyJJVkfoYuibYRfUNNbwRJNRxmE150U"></script>,
    <script
      dangerouslySetInnerHTML={{
        __html : `
        emailjs.init("user_iFpqu1LvtKtcWM8VcAgw6");
   	 `
      }}
    />,
  ]);
}