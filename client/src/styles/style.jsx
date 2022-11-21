import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffc045;
  word-break: break-all;
  background-color: #065471;
  margin: 5%;
  border-radius: 10px;
  height: 80%;
  width: 90%;

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  margin: 4px;
`;
const Form = styled.div`
  padding: 10px;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background: none;
  width: 80%;
  border: none;
  color: #ffc045;
  border-bottom: 2px solid #ffc045;
  font-family: 'Delius Unicase', cursive;

  :focus {
    outline: none;
  }
`;

const ButtonAdd = styled.button`
  background: none;
  border: none;
  margin-left: 4px;
  margin-right: 4px;
  color: #ffc045;
`;

const Select = styled.select`
  background: none;
  border: none;
  color: #ffc045;
  font-family: 'Delius Unicase', cursive;
  :active,
  :focus {
    outline: none;
  }
`;

const Option = styled.option`
  background-color: #065471;
`;

const Main = styled.main`
  background-color: #0c2233;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  height: 300px;
  overflow-y: auto;
  display: flex;
`;

const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const ListItem = styled.li`
  color: ${(props) => (props.completed === 'true' ? '#0a91ab' : '#ffc045')};
  margin: 10px;
  weight: 70%;
  border-bottom: 2px solid ${(props) => (props.completed === 'true' ? '#0a91ab' : '#ffc045')};
  background-position: 20% 20%;
  list-style-type: none;
  display: flex;
  transition: color 0.1s;
`;

const ButtonDelete = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  color: ${(props) => (props.completed === 'true' ? '#0a91ab' : '#ffc045')};
  transition: background-color 1s;
`;

const H1 = styled.h1`
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  color: ${(props) => (props.filter === 'true' ? '#0a91ab' : '#ffc045')};
`;

const ParentProgress = styled.div`
  background-color: #ffc045;
  margin: 20px;
  width: 70%;
`;

const ChildProgress = styled.div`
  ${(props) => {
    return `
  background-color: #0A91AB;
  height: 100%;
  width: ${props.calc};
  transition: width 2s ease;
`;
  }}
`;

const ProgressBarTitle = styled.span`
  margin-left: 5px;
  font-weight: 900;
  color: #0c2233;
  white-space: nowrap;
`;

const Footer = styled.footer`
  background-color: #065471;
  width: 100%;
  bottom: 0;
  position: fixed;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  padding: 3px;
`;
const Link = styled.a`
  margin-left: 4px;
`;

const Img = styled.img`
  width: 30px;
`;

export {
  Container,
  Title,
  Form,
  Input,
  ButtonAdd,
  Select,
  Option,
  Main,
  List,
  ListItem,
  ButtonDelete,
  H1,
  ParentProgress,
  ChildProgress,
  ProgressBarTitle,
  Footer,
  Link,
  Img,
};
