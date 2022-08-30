import styled from "styled-components";

const ItemList = ({ itemList, currentIndex }) => {
  const user = "KHANH";

  return (
    <Wrapper>
      {itemList.map((item, index) => {
        const isActive = currentIndex === index;
        return (
          <div
            id={`item_${index}`}
            key={item.id}
            className={isActive ? "item item_active" : "item item_none"}
          >
            <div className="img">
              <img src={item.src} alt={item.name} />
            </div>

            <div className="alphabets">
              {user.split("").map((i, index) => (
                <div key={index}>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.div`
  .item {
    display: none;

    .img {
      width: 60%;
      height: 620px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 100%;
        height: 100%;
        transform: rotate(-25deg);
        opacity: 0;
      }

      &::before {
        position: absolute;
        bottom: 5%;
        left: 0%;
        width: 0%;
        height: 15px;
        background-color: #9c9ca1;
        content: "";
        border-radius: 50%;
        filter: blur(10px);
      }
    }

    .alphabets {
      color: rgb(74, 76, 101);

      div {
        position: absolute;
        font-size: 35px;
        padding: 0px 10px;
        overflow: hidden;
        height: 35px;
        opacity: 1;

        span {
          display: block;
          opacity: 0;
        }

        &::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: rgb(178, 113, 40);
          line-height: 1;
        }
      }

      div:nth-child(1) {
        left: 30%;
        top: 5%;
      }

      div:nth-child(2) {
        left: 68%;
        top: 5%;
      }

      div:nth-child(3) {
        left: 36%;
        top: 20%;

        &::after {
          background-color: #4a4c65;
        }
      }

      div:nth-child(4) {
        left: 13%;
        top: 45%;
      }

      div:nth-child(5) {
        left: 85%;
        top: 45%;

        &::after {
          background-color: #9398dc;
        }
      }

      span {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    @media (max-width: 740px) {
      & {
        .img {
          width: 80%;
          height: 100%;

          img {
            height: 120%;
            width: 120%;
            position: absolute;
            top: -20%;
            right: -40%;
          }
        }

        .alphabets {
          div:nth-child(1) {
            left: 28%;
            top: -5%;
          }

          div:nth-child(2) {
            left: 50%;
            top: 10%;
          }

          div:nth-child(3) {
            left: 35%;
            top: 30%;
          }
          div:nth-child(4) {
            left: 20%;
            top: 47%;
          }
          div:nth-child(5) {
            left: 90%;
            top: 65%;
          }
        }
      }
    }

    @media (max-width: 368px) {
      & {
        .img {
          img {
            width: 100%;
            height: 100%;
            top: -10%;
            right: -25%;
          }
        }
      }
    }
  }

  @keyframes img_show {
    from {
      opacity: 0;
      transform: rotate(0deg) translate(0, 100px);
      filter: blur(33px);
    }
    to {
      opacity: 1;
      transform: rotate(-25deg) translate(0, 0px);
      filter: blur(0px);
    }
  }

  @keyframes img_hide {
    from {
      opacity: 1;
      transform: rotate(-25deg) translate(0, 0px);
      filter: blur(0px);
    }
    to {
      opacity: 0;
      transform: rotate(0) translate(0, 100px);
      filter: blur(33px);
    }
  }

  @keyframes shadow_in {
    from {
      width: 0%;
      left: 50%;
    }
    to {
      width: 100%;
      left: 0%;
    }
  }

  @keyframes shadow_out {
    from {
      width: 100%;
      left: 0%;
    }
    to {
      width: 0%;
      left: 50%;
    }
  }

  @keyframes alphabets_span_in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes alphabets_span_out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes alphabets_after_in {
    0% {
      width: 0%;
      left: 0;
      opacity: 0;
    }
    50% {
      width: 60%;
      left: 0%;
    }
    100% {
      width: 60%;
      left: 100%;
      opacity: 1;
    }
  }

  @keyframes alphabets_after_out {
    0% {
      width: 0%;
      left: 100%;
      opacity: 1;
    }
    50% {
      width: 60%;
      left: 0%;
    }
    100% {
      width: 0%;
      left: 0%;
      opacity: 0;
    }
  }

  .item.item_active {
    display: block;
    .img {
      img {
        animation: img_show 1.5s ease-out 1.5s 1 forwards;
      }

      &::before {
        animation-name: shadow_in;
        animation-duration: 1.8s;
        animation-delay: 1.5s;
        animation-fill-mode: forwards;
      }
    }

    .alphabets {
      div {
        span {
          animation: alphabets_span_in 0.6s ease-out 3s forwards;
        }

        &::after {
          animation: alphabets_after_in 0.6s ease-out 2.6s forwards;
        }

        &:nth-child(3)::after {
          animation-delay: 3s;
        }

        &:nth-child(3) span {
          animation-delay: 3.2s;
        }

        &:nth-child(4)::after,
        &:nth-child(5)::after {
          animation-delay: 3.2s;
        }
        &:nth-child(4) span,
        &:nth-child(5) span {
          animation-delay: 3.4s;
        }
      }
    }
  }

  .item.item_none {
    display: block;
    .img {
      img {
        animation: img_hide 1.5s ease-out 1 forwards;
      }

      &::before {
        animation-name: shadow_out;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
      }
    }

    .alphabets {
      div {
        span {
          animation: alphabets_span_out 0.6s ease-out forwards;
        }

        &::after {
          animation: alphabets_after_out 0.6s ease-out forwards;
        }

        &:nth-child(2) span,
        &:nth-child(2)::after {
          animation-delay: 0.3s;
        }
        &:nth-child(3) span,
        &:nth-child(3)::after {
          animation-delay: 0.2s;
        }
        &:nth-child(4) span,
        &:nth-child(4)::after,
        &:nth-child(5) span,
        &:nth-child(5)::after {
          animation-delay: 0.1s;
        }
      }
    }
  }
`;
