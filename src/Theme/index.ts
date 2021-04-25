import colors from "./colors";
import { Colors, Font, Radii, Space } from "./types";
import { font, space } from "./typography";
import radii from "./radii";

export interface DefaultTheme {
  colors: Colors;
  font: Font;
  radii: Radii;
  space: Space
}

const theme: DefaultTheme = {
  colors,
  font,
  radii,
  space
};

export default theme;
