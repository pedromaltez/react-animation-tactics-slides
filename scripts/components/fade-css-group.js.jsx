var React = require('react/addons'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;


module.exports = React.createClass({  
  
  getInitialState: function() {
    return {
      items: [0, 0, 0, 0]
    };
  },

  addItems: function (count) {
    var items = this.state.items;
    for (var i = count - 1; i >= 0; i--) {
      items.push(0);
    };
    this.setState({items: items});
  },

  removeItems: function (count) {
    var items = this.state.items;
    for (var i = count - 1; i >= 0; i--) {
      items.pop();
    };
    this.setState({items: items});
  },

  _renderItem: function (item, i) {
    return <div key={i} className='item' />;
  },

  render: function () {    
    return (
      <div>
        <CSSTransitionGroup transitionName='fade' className='list'>
          { this.state.items.map(this._renderItem) }
        </CSSTransitionGroup>

        <div className='controls'>
          <button onClick={this.addItems.bind(null, 1)}>+</button>
          <button onClick={this.removeItems.bind(null, 1)}>-</button>
        </div>
      </div>
    );
  }
});
  
