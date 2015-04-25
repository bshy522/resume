var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;
var _ = require('lodash');

var Paragraph = require('./Paragraph');

var EmploymentHistoryItem = React.createClass({
    displayName: 'EmploymentHistoryItem',
    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            componyName,
            dateRange,
            summary,
            className,
            ...other
        } = this.props;

        // var classes = this.getClasses('paragraph');

        var projects = _.map(this.props.projects, function(project, index) {
            return (
                <li key={index}>
                    <h5><i className="mui-icon-arrow-drop-right"/>{project.title}</h5>
                    <p>{project.desc}</p>
                </li>
            );
        });

        return (
            <section className="employment-history-item">
                <h4><span className="compony-name">{componyName}</span><span className="date-range">{dateRange}</span></h4>
                <p>{summary}</p>
                <ul>{projects}</ul>
            </section>
        );
    }

});

module.exports = EmploymentHistoryItem;
