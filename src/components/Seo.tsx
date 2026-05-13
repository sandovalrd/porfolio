import React from "react";
import { Helmet as _Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

// Fix for react-helmet with React 19
const Helmet = _Helmet as any;

import { DEVELOPER } from "../contents";

export const Seo = (props: any) => {
  const { title } = props;
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`${DEVELOPER.website}${location.pathname}`}
        />
        <meta
          name="og:description"
          content="Website created in order to show a portfolio of Rafael Sandoval as a Full Stack developer in Javascript using ReactJs and NodeJs, with personal projects, skills and social networks"
        />
        <meta property="og:type" content={DEVELOPER.type} />
        <meta property="og:site_name" content={DEVELOPER.name} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={DEVELOPER.image} />
      </Helmet>
    </div>
  );
};
