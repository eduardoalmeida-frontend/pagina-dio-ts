import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="data:image/jpeg;base64,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" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/114373550?v=4" />
          <div>
            <h4>Eduardo Almeida</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito para o curso de HTML e CSS no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };