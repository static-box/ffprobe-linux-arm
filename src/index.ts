import * as path from "path";
const version = "4.2.1";

export const arm64 = {
  path: path.resolve(__dirname, "../assets/ffmpeg-4.2.1-linux-arm-64"),
  version,
};

export const armhf32 = {
  path: path.resolve(__dirname, "../assets/ffmpeg-4.2.1-linux-armhf-32"),
  version,
};

export const armel32 = {
  path: path.resolve(__dirname, "../assets/ffmpeg-4.2.1-linux-armel-32"),
  version,
};
