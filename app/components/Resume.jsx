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
            summary: '前端工程师 基于公司产品,按设计要求在“云适配 WEB IDE”上制作移动端 HTML5 页面.参与公司客户联想,IDG 等移动版 网站制作与开发. NodeJS 工程师 负责小组工作任务统筹分配，核心模块开发及运维，招聘相关工作.',
            projects: [{
                title: '云适配平台',
                desc: '负责该项目后端功能开发. 为前端提供接口, 并编写部分前端功能.期间对 angularJS 有了进一步的认识.使用了 Express.js/Q/Mongoose/Winston 等模块.'
            }, {
                title: '云适配 WEB IDE',
                desc: '负责公司 新版 WEB IDE 开发,架构工作. 负责核心模块 BuildServer 与 DeployServer 的重构工作，将上述模块由单机重构为分布式. 自实现 负载均衡(轮询、权重)以及简单的业务监控。标准化上线部署流程，建立开发、测试、稳定及线上环境，避免产生线上问题。'
            }, {
                title: '云适配后端转码',
                desc: '负责编写后端转码引擎服务.通过用户域名映射的方式将终端用户访问的页面转换成适配页面. 使用了 connect/cheerio/request 等模块. 在服务端将业务模块组合拼接成 HTML 文档输出'
            }, {
                title: '云适配 APP 生成服务',
                desc: '通过用户输入一个网址,使用 cordovajs 生成出简单的 APP 应用.期间采用了 koa 框架.采用了 ES6 的相关特性.'
            }]
        }, {
            componyName: '美团网-猫眼电影',
            dateRange: '2015/5 - 2016/5',
            summary: '前端工程师 负责供应链产品相关开发和项目管理，负责团队基础组件建设。参与线上故障应急处理，招聘相关工作。',
            projects: [{
                title: '电影事业部 选座后台/影人后台/影库/结算平台/活动运营平台',
                desc: '将影人、影库后台整体由 jQuery 重构为 React，进行前后端分离，前端负责权限管控、API代理和页面托管。node 作为 web应用服务端，首次试水同构开发（SSR）。由于该后台对接的后台众多，在线下联调时经常因为 API接口得管理带来不少问题，因此实现了一个简单的 API Gateway，在 API Gateway 将 Java 端的各个系统模块统一注册，根据当前环境分发 API 调用'
            }]
        }, {
            componyName: 'QingCloud(北京优帆科技有限公司)',
            dateRange: '2016/6 - 2017/4',
            summary: '前端工程师 参与公司每周的工单值班小组，招聘相关工作',
            projects: [{
                title: "QingCloud Web Console",
                desc: "负责青云 WebConsole 的日常开发及维护工作，包括 WebTerminal，EIP 模块的开发等。该项目基于 jQuery 及 Knockout",
            }, {
                title: "青云 UI 组件库",
                desc: "基于 React 开发，包含数十个（Form，Table，Input，Button 等等）基础组件及若干业务组件，自建组件开发工具链，集成 StoryBook（组件开发工具）统一组件调试方法。"
            }, {
                title: "青云 APPCenter",
                desc: "支持该项目从 0 到 1 的开发。在该项目中对 QingCloud UI 组件库进行首次实践，基于 Python Flask 前后端分离，支持国际化。",
            }, {
                title: "青云 内部前端监控平台（sentry）",
                desc: "搭建及维护Sentry 平台，并在公司范围内推广接入。",
            }]
        }, {
            componyName: '蚂蚁金服-支付宝事业群',
            dateRange: '2017/4 - 至今',
            summary: '高级前端工程师 支付宝端内 Hybrid 应用开发，业务组件开发等。蚂蚁森林/红包等运营活动开发',
            projects: [{
                title: "公益官网/公益机构后台/公益运营后台",
                desc: "运营后台为 05 年的项目，并且从未进行技术重构，接手后在不影响业务开发的情况下将整个项目重构为 React 技术栈、前后端分离，改造为现代前端项目。建设公益类相关业务组件（项目详情、项目评价、介绍等）"
            }, {
                title: "支付宝五福项目(2017-2020)",
                desc: "连续 3 年参与五福项目，负责核心分会场的技术方案、风险评估、技术保障及开发工作。负责数据大屏及五福后台等开发工作。"
            }, {
                title: "支付宝运动",
                desc: "平稳完成支付宝运动迁移支付宝小程序的工作，参与计步相关治理工作，支付宝小程序地图组件设计。打造出玩法基于地图+步数的新型业务“我的路线”。运动业务线参与数次大促（95 公益周，双 11，双 12）。从零学习 2D 游戏开发，并应用在积分挑战赛及步数挑战赛项目中。"
            }]
        }];
                        

        var skills = [
            '了解 W3C 标准,熟悉 HTTP 协议、AJAX、ECMAScript、CommonJS',
            '熟练掌握 (x)HTML、CSS、JavaScript、Java/JSP、C#',
            '熟练掌握 ReactJS、BabelJS、ExtJS、Dojo、JQuery、Twitter Bootstrap、TypeScript、Less CSS、NodeJS、NPM、bower、MongoDB、Redis、Oracle、Nginx',
            '熟练使用 SVN、GIT 等版本控制工具,熟练使用 Sublime text/Eclipse/MyEclipse/WebStorm/PlSql Developer/Toad/XManager 等工具',
            '熟练使用NodeJS各个活跃模块,1年NodeJS生产环境开发经验.',
            '熟练操作Linux,可在MacOS或类UNIX操作系统下进行工作'
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
                <EmploymentHistory items={employmentHistory.reverse()}/>
                <TextList items={skills} title="职业技能" icon="mui-icon-arrow-drop-right"/>
                <TextList items={edus} title="教育经历" icon="mui-icon-arrow-drop-right"/>
                <TextList items={selfAssessment} title="自我评价" icon="mui-icon-arrow-drop-right"/>
            </div>
        );
    }

});
