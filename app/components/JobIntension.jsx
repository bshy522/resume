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
            className,
            items,
            ...other
        } = this.props;

        var classes = this.getClasses('job-intension');

        return (
            <Paragraph className={classes} title="求职意向">
                <div className="table">
                    <div>
                        <label>职务:</label>全栈工程师/前端工程师
                    </div>
                    <div>
                        <label>地区:</label>成都、北京
                    </div>
                    <div>
                        <label>期望待遇:</label>面议
                    </div>
                    <div>
                        <label>到岗时间:</label>面议
                    </div>
                </div>
            </Paragraph>
        );
    }

});
