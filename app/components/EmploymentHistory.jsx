var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var _ = require('lodash');

var Paragraph = require('./Paragraph');
var EmploymentHistoryItem = require('./EmploymentHistoryItem');

var EmploymentHistory = module.exports = React.createClass({
    displayName: 'EmploymentHistory',
    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            className,
            items,
            ...other
        } = this.props;

        var classes = this.getClasses('paragraph');

        var items = _.map(this.props.items, function(item, index) {
            return (
                <EmploymentHistoryItem key={index} componyName={item.componyName} dateRange={item.dateRange} summary={item.summary} projects={item.projects}/>
            );
        });

        return (
            <Paragraph title="工作经历">
                <div className="employment">
                    {items}
                </div>
            </Paragraph>
        );
    }

});
