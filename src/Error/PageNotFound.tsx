import Footer from "@components/common/Footer/Footer";
import Header from "@components/common/Header/Header";
import Lottie from "lottie-react";
import not_found from "@assets/LottieFiles/not_found.json";
const PageNotFound = () => {
  return (
    <>
      <Header />
      <Lottie
        animationData={not_found}
        style={{ width: "400px", margin: "40px auto" }}
      />
      <h4 style={{ textAlign: "center", color: "red" }}>
        You are trying to access a page that does not exist.
      </h4>
      <Footer />
    </>
  );
};

export default PageNotFound;
