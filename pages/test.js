import React from 'react';
const backgroundColor = '#eee';

export default () => (
  <div className="hello full-height-min flex-vertical-center">
    <p>Hello World</p>
    <div className="field">
      <div className="control is-large is-loading">
        <input
          className="input is-large"
          type="text"
          placeholder="Large loading input"
        />
      </div>
    </div>
    <style jsx>{`
      $color: red;
      .hello {
        background-color: ${backgroundColor};
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
        &:hover {
          color: $color;
        }
        @media only screen and (max-width: 480px) {
          font-size: 20px;
        }
      }
    `}</style>
  </div>
);
