import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";

const Header = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="avatar" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  position: absolute;
  top: 50px;
  left: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    box-shadow: 5px 5px 5px rgba(0 0 0 / 20%), 0 0 10px rgba(0 0 0 / 40%);
  }

  @media (max-width: 740px) {
    & {
      top: 20px;
      left: 20px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
