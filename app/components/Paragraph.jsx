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
            <div className={classes}>
                <h3>{title}</h3>
                <Paper className="container" ref="container" zDepth={0}>
                    {this.props.children}
                </Paper>
            </div>
        );
    }

});
