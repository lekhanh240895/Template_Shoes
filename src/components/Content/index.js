import { useEffect } from "react";
import styled from "styled-components";

const Content = ({ itemList, currentIndex }) => {
  useEffect(() => {
    const listCount = itemList.length;
    const $ = document.querySelector.bind(document);

    function RemoveAllClass(id) {
      $("#content_" + id).classList.remove("item_0");
      $("#content_" + id).classList.remove("item_1");
      $("#content_" + id).classList.remove("item_2");
      $("#content_" + id).classList.remove("item_none");
    }

    const item_0 = currentIndex - 1 < 0 ? listCount - 1 : currentIndex - 1;
    const item_2 = currentIndex + 1 < listCount ? currentIndex + 1 : 0;

    const indexes = Array.from({ length: listCount })
      .map((i, index) => {
        return index;
      })
      .filter((index) => ![item_0, currentIndex, item_2].includes(index));

    RemoveAllClass(currentIndex);
    RemoveAllClass(item_0);
    RemoveAllClass(item_2);

    indexes.forEach((index) => {
      RemoveAllClass(index);
      $("#content_" + index).classList.add("item_none");
    });

    $("#content_" + item_0).classList.add("item_0");
    $("#content_" + currentIndex).classList.add("item_1");
    $("#content_" + item_2).classList.add("item_2");
  }, [currentIndex, itemList]);

  return (
    <Wrapper>
      {itemList.map((item, index) => {
        return (
          <div id={`content_${index}`} key={item.id} className="item item_none">
            <h1>{item.name}</h1>
            <p>{item.desc}</p>

            <div className="button-group">
              <button className="btn btn-cart">
                <i className="fa fa-cart-arrow-down"></i>
              </button>
              <button className="btn">
                <i className="fa fa-heart-circle-check"></i>
              </button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  position: absolute;
  right: 30px;
  width: 300px;
  height: calc(100% - 100px);
  top: 50px;
  overflow: hidden;

  .item {
    width: 100%;
    position: absolute;
    overflow: hidden;
    transition: 1s;
    padding: 0 16px;

    h1 {
      font-size: 2.6rem;
      font-weight: 700;
    }

    p {
      font-size: 1.3rem;
      max-width: 150px;
      line-height: 2.5;
    }
  }

  .item.item_0 {
    opacity: 0;
    left: -100%;
  }
  .item.item_1 {
    opacity: 1;
    left: 0px;
  }
  .item.item_2 {
    opacity: 0;
    left: 100%;
  }
  .item.item_none {
    opacity: 0;
    left: 100%;
  }

  .button-group {
    margin: 50px 0 13px;

    .btn {
      border: none;
      outline: none;
      height: 55px;
      min-width: 115px;
      line-height: 55px;
      text-align: center;
      background-color: #f0f0f0;
      cursor: pointer;

      i {
        font-size: 1.5rem;
      }

      &:nth-child(1) {
        background-color: rgb(219, 227, 216);
      }

      &:hover {
        box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
      }
    }

    .btn + .btn {
      margin-left: 8px;
    }
  }

  @media (max-width: 740px) {
    & {
      top: 50%;
      left: 0;
      background-color: #fff;
      border-radius: 25px;
      height: 55%;

      .item {
        padding: 16px;

        h1
        {
          text-align: center;
        }

        p {
          margin: 0 auto;
        }
      }

      .button-group {
        margin: 30px auto;
        display: flex;

        .btn {
          min-width: unset;
          flex: 1;
        }
      }
    }
  }
`;
