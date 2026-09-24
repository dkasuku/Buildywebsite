import { readContent } from "../lib/content";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Buildsasa — Construction Management Software for Contractors",
  description:
    "Buildsasa is an all-in-one construction management platform that runs your projects from the jobsite to the back office.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const SCRIPTS = [
  "jquery-3.7.1.min.js",
  "viewport.jquery.js",
  "bootstrap.bundle.min.js",
  "gsap.min.js",
  "ScrollTrigger.min.js",
  "ScrollSmoother.min.js",
  "ScrollToPlugin.min.js",
  "SplitText.min.js",
  "TextPlugin.js",
  "chroma.min.js",
  "jquery.nice-select.min.js",
  "jquery.waypoints.js",
  "jquery.counterup.min.js",
  "swiper-bundle.min.js",
  "jquery.meanmenu.min.js",
  "parallaxie.js",
  "jquery.magnific-popup.min.js",
  "wow.min.js",
  "main.js",
  "buildsasa-forms.js",
];

export default function RootLayout({ children }) {
  const pre = readContent("_pre");
  const search = readContent("_search");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/assets/img/buildsasa/Buildsasa.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/buildsasa-custom.css" />
      </head>
      <body>
        {/* buildsasa-forms.js is a static asset and cannot read build-time env, so
            the API base is published here for it to read. Without this the script
            falls back to a hardcoded URL — which works, but would silently ignore
            NEXT_PUBLIC_API_URL if the backend ever moved. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__BUILDSASA_API__=${JSON.stringify(
              process.env.NEXT_PUBLIC_API_URL || "https://api.buildsasa.com",
            )};`,
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: pre }} />
        <Header />
        <div dangerouslySetInnerHTML={{ __html: search }} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
        {SCRIPTS.map((s) => (
          <script key={s} src={`/assets/js/${s}`} defer />
        ))}
      </body>
    </html>
  );
}
