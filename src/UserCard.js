import React from 'react';
import avatar from './avatar.webp'; 
import './UserCard.css';

function UserCard({ name, email, age }) {
  return (
    <div className="user-card">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="user-card-avatar"
      />
      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__info">
        <span className="user-card__label">Email:</span> {email}
      </p>
      <p className="user-card__info">
        <span className="user-card__label">Age:</span> {age}
      </p>
    </div>
  );
}

export default UserCard;
