import styled from "styled-components";

export const Tag = styled.span`
  padding: 4px 8px;
  margin: 20px 10px 20px 0;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #edeafd;
  color: #4529e6;
`;

export const ButtonBlue = styled.button`
  min-width: 100px;
  min-height: 38px;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1.5px solid #4529e6;
  background: #4529e6;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  color: #ffffff;

  @media (min-width: 720px) {
    :hover {
      color: #4529E6;
      border-color: #4529E6;
      background-color: #EDEAFD;
    }
  }
`;

export const TitleAdContainer = styled.div`
  min-width: 300px;
  max-width: 750px;
  width: auto !important;
  padding: 25px 15px;
  margin: 10px !important;
  border-radius: 4px;
  background: #fdfdfd;
  box-sizing: border-box;

  div {
    margin-left: 0 !important;
    h2 {
      height: auto;
    }

    .container {
      display: flex;
      flex-direction: column;
    }

    h2,
    div div,
    p {
      width: 100%;
      margin: 0 0 20px 0;
    }
  }

  @media (min-width: 720px) {
    margin: 10px auto !important;

    div h2 {
      margin: 0 0 40px 0 !important;
    }

    div .container {
      flex-direction: row;

      p {
        text-align: end;
      }
    }
  }
`;
