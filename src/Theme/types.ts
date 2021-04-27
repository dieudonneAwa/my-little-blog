export type Colors = {
  emerald: string;
  spacecadet: string;
  cultured: string;
  lightgrey: string;
  white: string;
  blueviolet: string;
  richblack: string;
};

export type Space = {
  none: string;
  nano: string;
  micro: string;
  mini: string;
  tiny: string;
  small: string;
  medium: string;
  large: string;
  big: string;
  huge: string;
  massive: string;
};

export type Font = {
  family: {
    poppins: string;
  };
  size: Space;
};

export type Radii = {
  none: string;
  small: string;
  medium: string;
  large: string;
  huge: string;
};

export type Article = {
  id: string;
  createdAt: string;
  title: string;
  content: string;
  createdBy: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
};

export type Comment = {
  id: string;
  name: string;
  createdAt: string;
  content: string;
};

export type AppTheme = 'light' | 'dark';
