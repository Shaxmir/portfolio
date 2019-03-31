import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/open_menu";
import "./scripts/slaider";
import "./scripts/rewievs";
import "./scripts/yak";
import "./scripts/windows";