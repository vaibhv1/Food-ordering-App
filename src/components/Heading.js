import React, { useState } from 'react';

export const Heading = () => {
    return (
      <>
        <nav>
          <Logo></Logo>
          <div>{Head1()}</div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </nav>
      </>
    );
  };
var Logo = () => {
  return (
    <div>
      <img
        id="logo"
        alt="food image"
        src="https://www.cnet.com/a/img/resize//hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"
      ></img>
    </div>
  );
};

var Head1 = function () {
  return (
    <div className="head1" key="header">
      <h2>Food Ordering App</h2>
    </div>
  );
};