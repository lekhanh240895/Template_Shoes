import styled from "styled-components";

const ButtonGroup = ({ onPrevious, onNext }) => {
  return (
    <Wrapper>
      <button onClick={onPrevious}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <button onClick={onNext}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </Wrapper>
  );
};

export default ButtonGroup;

const Wrapper = styled.div`
  position: absolute;
  bottom: 60px;
  right: 60px;

  button {
    border: none;
    outline: none;
    height: 35px;
    width: 27px;
    line-height: 35px;
    text-align: center;
    background-color: #f0f0f0;
    cursor: pointer;

    i {
      font-size: 1.5rem;
    }

    &:hover {
      box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
    }
  }

  button + button {
    margin-left: 8px;
  }

  @media (max-width: 740px) {
    & {
      right: 3%;
      bottom: 55%;
      z-index: 1;

      button {
        height: 25px;
        width: 20px;
        line-height: 25px;
        background-color: #f0f0f088;
      }

      button + button {
        margin-left: 4px;
      }
    }
  }
`;
