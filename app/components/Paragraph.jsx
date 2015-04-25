var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var Paper = MUI.Paper;

var Paragraph = module.exports = React.createClass({

    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            title,
            className,
            ...other
        } = this.props;

        var classes = this.getClasses('paragraph');

        return (
            <div>
                <h3>{title}</h3>
                <Paper ref="container" className={classes} zDepth={0}>
                    {this.props.children}
                </Paper>
            </div>
        );
    }

});
