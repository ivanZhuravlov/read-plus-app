import studyAnimation from "../assets/images/lottie_animated/sign-in-lottie.json";
import errorAnimation from "../assets/images/lottie_animated/email-error.json";
import sendAnimation from "../assets/images/lottie_animated/email-send.json";
import warningAnimation from "../assets/images/lottie_animated/warning.json";
import confirmationAnimation from "../assets/images/lottie_animated/сonfirmation.json";
import infoAnimation from "../assets/images/lottie_animated/info.json";

export const lottieAnimationOptions = [
  {
    type: "error",
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    type: "warning",
    loop: true,
    autoplay: true,
    animationData: warningAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    type: "info",
    loop: true,
    autoplay: true,
    animationData: infoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    type: "confirmation",
    loop: true,
    autoplay: true,
    animationData: confirmationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    type: "send-email",
    loop: true,
    autoplay: true,
    animationData: sendAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  {
    type: "bg-sign-in",
    loop: true,
    autoplay: true,
    animationData: studyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
];

export const getAnimation = type =>
  lottieAnimationOptions.find(a => a.type === type);
