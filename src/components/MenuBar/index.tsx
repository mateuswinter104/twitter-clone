import React from 'react';

import Button from '../Button';

import ProfileImg from '../../assets/profilePicture.jpeg';
import Twitter from '../../assets/twitterWhite.png';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
          <img src={Twitter} alt="Twitter"/>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img src={ProfileImg} alt="Perfil"/>
        </Avatar>

        <ProfileData>
          <strong>Mateus Winter</strong>
          <span>@winter_mateus</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
