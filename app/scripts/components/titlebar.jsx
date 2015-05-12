import React from 'react'

let WindowControls = React.createClass({
  render: function () {
    return (
      <window-controls></window-controls>
    )
  }
})

let Banner = React.createClass({
  render: function () {
    return (
      <banner></banner>
    )
  }
});

let Titlebar = React.createClass({
  render: function () {
    return (
      <titlebar>
        <window-controls>
          <span className="window-control close"></span>
          <span className="window-control min"></span>
          <span className="window-control max"></span>
        </window-controls>
        <h1 className="title">App</h1>
        <banner>Sean</banner>
      </titlebar>
    )
  }
});

export default Titlebar;
