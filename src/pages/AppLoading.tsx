import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "@assets/images/loading.json";

const AppLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white-50 dark:bg-ebony-950">
      <Player
        autoplay
        loop
        src={LoadingAnimation}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default AppLoading;
