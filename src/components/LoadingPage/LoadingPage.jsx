import { Container, Loader } from "./LoadingPage.style";

const LoadingPage = () => {
  return (
    <Container>
      <Loader>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </Loader>
    </Container>
  );
};

export default LoadingPage;
