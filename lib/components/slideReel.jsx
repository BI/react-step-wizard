var React = require('react');

require('../slideReelStyles.scss');

var SlideReel = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  getDefaultProps: function() {
    return {

    };
  },

  propTypes: {
    currentIndex: React.PropTypes.number.isRequired,
  },

  getSlides: function() {
    return this.props.children.map(function (child, id) {
      var style = {
        left: id * 100 + "%",
      };

      return (
        <div
          key={id}
          className="sr-slide"
          style={style}>
          {child}
        </div>
      )
    }, this);
  },

  render: function() {
    var slides = this.getSlides();
    var style = {
      left: -this.props.currentIndex * 100 + "%",
    };

    return (
      <div className="sr-viewport">
        <div className="sr-container">
          <div className="sr-slidePanel" style={style}>
            {slides}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SlideReel;