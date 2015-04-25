var React = require('react');
var MUI = require('material-ui');
var Classable = MUI.Mixins.Classable;

var Profile = require('./Profile');
var EmploymentHistory = require('./EmploymentHistory');
var TextList = require('./TextList');
var JobIntension = require('./JobIntension');

var Resume = module.exports = React.createClass({

    mixins: [Classable],

    propTypes: {
    },

    render: function() {
        var {
            className,
            ...other
        } = this.props;

        var classes = this.getClasses('resume');

        var employmentHistory = [{
            componyName: '乌鲁木齐光通嘉业网络服务有限公司',
            dateRange: '2010/10 - 2013/8',
            summary: '国土项目组 高级软件工程师 负责需求分析、功能设计、核心模块编码、前端框架设计和扩展等工作。',
            projects: [{
                title: '乌鲁木齐市国土资源土地利用与供应管理系统',
                desc: '负责功能需求分析,数据库设计.部署等工作. 该项目采用 JAVA SSH, ExtJS,Oracle 等技术开发.用于解决国土资源部门土地登记和审批业务.期间了解了部分关于 ArcGIS 的知识.'
            }, {
                title: '乌鲁木齐市国土资源信息共享管理平台',
                desc: '负责该项目核心部分的代码编写(数据同步,数据抽取).采用 JAVA SSH,ExtJS,Oracle,fastjson,Druid,Quartz 等技术开发, 用于解决国土资源部门和其他协办单位 的信息实时浏览,查询.该项目中,将公司框架整体升级,并进行架构优化,减少了很多重复性 代码.期间得到了很多对框架设计方面的心得体会.'
            }, {
                title: '乌鲁木齐光通嘉业网络有限公司',
                desc: '工作计划管理系统 负责该项目的功能维护,开发等工作. 同样采用 JAVA SSH,ExtJS,Oracle 技术.用于完成公司内部员工工作计划上报,工作日志,周报,周计划审核审批,人员请假等功能.'
            }, {
                title: '乌鲁木齐市国土资源网上交易系统',
                desc: '负责该项目的整体工作协调,银行接口联调,CA 证书申请等工作,由于涉及多方人员,工作内容比较繁杂.虽然本身的编程技术没有得到很大的提升,但对于工作协调,计算机网 络,Linux 等其他知识有很大提升.'
            }]
        }, {
            componyName: '云适配(美通云动(北京)科技有限公司)',
            dateRange: '2013/10 - 2015/4',
            summary: '前端工程师 基于公司产品,按设计要求制作移动端 HTML5 页面.参与公司客户联想,IDG 等移动版 网站制作与开发.</br>NodeJS 工程师 负责小组工作任务统筹分配,后端核心模块编码.公司服务器管理,产品部署.后端 工程师面试工作.',
            projects: [{
                title: '云适配平台',
                desc: '负责该项目后端功能开发. 为前端提供接口, 并编写部分前端功能.期间对 angularJS 有了进一步的认识.使用了 Express.js/Q/Mongoose/Winston 等模块.'
            }, {
                title: '云适配 WEB IDE',
                desc: '负责公司 新版 WEB IDE 开发,架构工作. 引入了许多新的模块.推行 Rails 的目录结构风格.进行 Buildserver 与 DeployServer 的重构工作.'
            }, {
                title: '云适配后端转码',
                desc: '负责编写后端转码引擎服务.通过用户域名映射的方式将终端用户访问的页面转换成适配页面.使用了 connect/cheerio/request 等模块.'
            }, {
                title: '云适配 APP 生成服务',
                desc: '通过用户输入一个网址,使用 cordovajs 生成出简单的 APP 应用.期间采用了 koa 框架.采用了 ES6 的语法.'
            }]
        }];

        var skills = [
            '了解 W3C 标准,熟悉 HTTP 协议、AJAX、ECMAScript、CommonJS',
            '熟练掌握 (x)HTML、CSS、JavaScript、Java/JSP、C#',
            '熟练掌握 ExtJS、Dojo、JQuery、Twitter Bootstrap、Coffeescript、Less CSS、Underscore.js 、NodeJS、NPM、bower、MongoDB、Redis、Oracle、Nginx',
            '熟练使用 svn、git 等版本控制工具,熟练使用 Sublime text/Eclipse/MyEclipse/WebStorm/PlSql Developer/Toad/XManager 等工具',
            '熟练使用NodeJS各个活跃模块,1年NodeJS生产环境开发经验.',
            '熟练操作Linux,可在MacOS或类unix操作系统下进行工作'
        ];

        var edus = [
            '新疆大学 - 计算机科学与技术',
            '清华大学<高级软件工程师>系列培训',
            '信息产业部软件工程师资格认证,计算机等级考试二级'
        ];

        var selfAssessment = [
            '从初中开始接触简单的脚本。热爱计算机,对一切关于计算机的事物有浓厚兴趣,热 爱软件开发,自学能力强,关注业内前沿技术。',
            '良好的编程思维,对工作认真负责、积极主动。',
            '热衷于参加各类线下社区活动。'
        ];

        return (
            <div className={classes}>
                <Profile/>
                <JobIntension/>
                <EmploymentHistory items={employmentHistory}/>
                <TextList items={skills} title="职业技能" icon="mui-icon-arrow-drop-right"/>
                <TextList items={edus} title="教育经历" icon="mui-icon-arrow-drop-right"/>
                <TextList items={selfAssessment} title="自我评价" icon="mui-icon-arrow-drop-right"/>
            </div>
        );
    }

});
