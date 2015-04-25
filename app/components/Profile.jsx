var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var Paper = MUI.Paper;
// var LeftNav = MUI.LeftNav;
// var MenuItem = MUI.MenuItem;

module.exports = React.createClass({

    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            className,
            ...other
        } = this.props;

        var classes = this.getClasses('profile');

        return (
            <div className={classes}>
                <h1 className="fullname">罗黎</h1>
                <ul className="profile-detail">
                    <li>男,90年生人,工作年限4年</li>
                    <li>北京市海淀区五道口</li>
                    <li className="phone_home">152-1011-5311</li>
                    <li>bshy522@gmail.com</li>
                    <li><a href="http://bshy.me" taget="_blank">bshy.me</a></li>
                    <li><a href="http://github.com/bshy522" taget="_blank">github.com/bshy522</a></li>
                </ul> 
            </div>
        );
    }

});
