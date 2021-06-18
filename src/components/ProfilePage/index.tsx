import React from 'react';

import Feed from '../Feed';

import ProfileImg from '../../assets/profilePicture.jpeg';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={ProfileImg}/>
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Mateus Winter</h1>
        <h2>@winter_mateus</h2>

        <p>
          Web Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de setembro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>1</strong>
          </span>
          <span>
            <strong>3 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
