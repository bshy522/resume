var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var _ = require('lodash');

var Paragraph = require('./Paragraph');

module.exports = React.createClass({
    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            title,
            className,
            items,
            icon,
            ...other
        } = this.props;

        var classes = this.getClasses('paragraph');

        var items = _.map(this.props.items, function(item, index) {
            return (
                <li key={index}>
                    <p><i className={icon}/>{item}</p>
                </li>
            );
        });

        return (
            <Paragraph className="text-list" title={title}>
                <ul>
                    {items}
                </ul>
            </Paragraph>
        );
    }

});
