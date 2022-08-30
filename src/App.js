import { useEffect, useState } from "react";
import styled from "styled-components";
import images from "./assets/images";
import ButtonGroup from "./components/ButtonGroup";
import Content from "./components/Content";
import GlobalStyles from "./components/GlobalStyles/index";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const itemList = [
  {
    id: 1,
    name: "Lê Khánh Item 0",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 0",
    src: images.img1,
    background: "#ADBA85",
  },
  {
    id: 2,
    name: "Lê Khánh Item 1",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 1",
    src: images.img2,
    background: "#C2AA88",
  },
  {
    id: 3,
    name: "Lê Khánh Item 2",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 2",
    src: images.img3,
    background: "#C7DDE8",
  },
  {
    id: 4,
    name: "Lê Khánh Item 3",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 3",
    src: images.img1,
    background: "#ADBA85",
  },
  {
    id: 5,
    name: "Lê Khánh Item 4",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 4",
    src: images.img2,
    background: "#C2AA88",
  },
  {
    id: 6,
    name: "Lê Khánh Item 5",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 5",
    src: images.img3,
    background: "#C7DDE8",
  },
  {
    id: 7,
    name: "Lê Khánh Item 6",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 6",
    src: images.img1,
    background: "#ADBA85",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(itemList[currentIndex].background);
  }, [currentIndex]);

  const handlePrevious = () => {
    const listLength = itemList.length;

    if (currentIndex <= 0) {
      setTimeout(() => {
        setCurrentIndex(listLength - 1);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 500);
    }
  };

  const handleNext = () => {
    const listLength = itemList.length;

    if (currentIndex < listLength - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
    }
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />
        <Content itemList={itemList} currentIndex={currentIndex} />
        <ButtonGroup onPrevious={handlePrevious} onNext={handleNext} />

        <DotGroup>
          {Array.from({ length: itemList.length }).map((i, index) => {
            const isActive = currentIndex === index;
            return <div key={index} className={isActive ? "active" : ""}></div>;
          })}
        </DotGroup>

        <List>
          <Background backgroundColor={backgroundColor} />
          <ItemList itemList={itemList} currentIndex={currentIndex} />
        </List>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #f5f5f5;
  width: 1100px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media (max-width: 740px) {
    & {
      max-width: 300px;
      height: 500px;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  border-radius: 30% 70% 25% 75% / 49% 35% 65% 51%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#cd8dd9"};
  transition: 1s;
  transform: rotate(0deg) translate(-50%, -50%);
  z-index: -1;
  opacity: 0.6;
  filter: blur(69px);
  transition: 2s;
`;

const List = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: -20%;
  top: 15%;
  text-align: center;

  @media (max-width: 740px) {
    & {
      height: 50%;
      left: -10%;
      top: -5%;
    }
  }
`;

const DotGroup = styled.div`
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 740px) {
    & {
      top: 30%;
    }
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #dcdcdc;
    transition: 1s;

    &.active {
      background-color: rgb(178, 113, 40);
    }
  }
  div + div {
    margin-top: 4px;
  }
`;
