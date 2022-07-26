import tw, { styled } from "twin.macro";

const Title = styled.h1`
  ${tw`text-indigo-500`}
`;

const App = () => {
  return (
    <div className="App">
      <Title className="font-bold text-7xl">App </Title>
    </div>
  );
};

export default App;
