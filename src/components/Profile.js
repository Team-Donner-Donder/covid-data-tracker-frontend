import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import { Card } from "react-bootstrap";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <Card style={{ width: '20rem' }}>
        <Card.Img src={user.picture} alt={user.name} />
        <Card.Title>
          {user.name}
          <Card.Body>{user.email}</Card.Body>
        </Card.Title>
        
        <LogoutButton /> 
      </Card>
    ) : <LoginButton />
  );
};

export default Profile;
