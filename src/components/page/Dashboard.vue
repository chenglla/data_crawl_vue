<template>
    <div>
        <el-row>
            <el-card style="height: 340px;">
                <div ref="lineChart" style="width: 100%;height: 320px"></div>
<!--                <el-carousel :interval="4000" type="card" height="300px" style="background: #fff;">-->
<!--                    <el-carousel-item-->
<!--                            class="lunbo-box-item"-->
<!--                            v-for="(item,index) in abc_img"-->
<!--                            :key="index"-->
<!--                    >-->
<!--                        <img :src="item.src" class="lunbotu" alt="轮播图">-->
<!--                    </el-carousel-item>-->
<!--                </el-carousel>-->
            </el-card>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:230px;">
                    <div class="user-info">
                        <div class="user-info-cont">
                            <h3>数据抓取</h3>
                        </div>
                    </div>
                    <!--                    <div style="height: 110px">-->
                    <!--                        <el-scrollbar style="height: 100%">-->
<!--                    <p class="crawl_content">即网络爬虫，网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。另外一些不常使用的名字还有蚂蚁、自动索引、模拟程序或者蠕虫。</p>-->
                    <p class="crawl_content">按照一定的规则，自动地抓取万维网信息的程序或者脚本。</p>
                    <p class="crawl_content">我们认为：根据需求配置采集模版，采用技术框架定时保质获取公开互联网数据的技术。</p>
                    <!--                        </el-scrollbar>-->
                    <!--                    </div>-->


                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:230px;">
<!--                    <div class="user-info">-->
                        <img src="../../assets/img/6.jpg" class="user-avator" alt="">
                        <div class="user-info-cont">
<!--                            时效-->
                            <div class="user-info-name">{{date | formatDate }}</div>

<!--                            <div style="margin-top: 15px;font-size: 13px">{{role}}</div>-->
                        </div>
<!--                    </div>-->
<!--                    <div class="user-info-list">上次登录时间：<span>2019-09-04</span></div>-->
<!--                    <div class="user-info-list">上次登录地点：<span>北京</span></div>-->
                </el-card>
<!--                <el-card shadow="hover" class="mgb20" style="height:252px;">-->
<!--                    <div class="user-info">-->
<!--                        <div class="user-info-cont">-->
<!--                            <h3>动态网页</h3>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <p class="crawl_content">即网络爬虫，网络爬虫（又被称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。另外一些不常使用的名字还有蚂蚁、自动索引、模拟程序或者蠕虫。</p>-->
<!--                </el-card>-->
<!--                <el-card shadow="hover" style="height:252px;">-->
<!--                    <div slot="header" class="clearfix">-->
<!--                        <span>语言详情</span>-->
<!--                    </div>-->
<!--                    Vue-->
<!--                    <el-progress :percentage="71.3" color="#42b983"></el-progress>-->
<!--                    JavaScript-->
<!--                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>-->
<!--                    CSS-->
<!--                    <el-progress :percentage="3.7"></el-progress>-->
<!--                    HTML-->
<!--                    <el-progress :percentage="0.9" color="#f56c6c"></el-progress>-->
<!--                </el-card>-->
            </el-col>
            <el-col :span="16">
<!--                <el-row :gutter="20" class="mgb20">-->
<!--                    <el-col :span="8">-->
<!--                        <el-card shadow="hover" :body-style="{padding: '0px'}">-->
<!--                            <div class="grid-content grid-con-1">-->
<!--                                <i class="el-icon-lx-people grid-con-icon"></i>-->
<!--                                <div class="grid-cont-right">-->
<!--                                    <div class="grid-num">1234</div>-->
<!--                                    <div>用户访问量</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </el-card>-->
<!--                    </el-col>-->
<!--                    <el-col :span="8">-->
<!--                        <el-card shadow="hover" :body-style="{padding: '0px'}">-->
<!--                            <div class="grid-content grid-con-2">-->
<!--                                <i class="el-icon-lx-notice grid-con-icon"></i>-->
<!--                                <div class="grid-cont-right">-->
<!--                                    <div class="grid-num">8</div>-->
<!--                                    <div>模板数量</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </el-card>-->
<!--                    </el-col>-->
<!--                    <el-col :span="8">-->
<!--                        <el-card shadow="hover" :body-style="{padding: '0px'}">-->
<!--                            <div class="grid-content grid-con-3">-->
<!--                                <i class="el-icon-lx-goods grid-con-icon"></i>-->
<!--                                <div class="grid-cont-right">-->
<!--                                    <div class="grid-num">5000</div>-->
<!--                                    <div>采集数量</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </el-card>-->
<!--                    </el-col>-->
<!--                </el-row>-->
                <el-card shadow="hover" style="height:480px;">
                    <div style="width: 100%; height: 400px;" ref="pieChart">
                    </div>
<!--                    <img src="../../assets/img/4.png" class="crawl_process">-->
<!--                    <div slot="header" class="clearfix">-->
<!--                        <span>采集动态</span>-->
<!--&lt;!&ndash;                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>&ndash;&gt;-->
<!--                    </div>-->
<!--&lt;!&ndash;                    <div>&ndash;&gt;-->
<!--&lt;!&ndash;                        <p>选择要爬取的网站</p>&ndash;&gt;-->
<!--&lt;!&ndash;                        <i class="el-icon-sort-down"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                    <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">-->
<!--                        <el-table-column width="40">-->
<!--                            <template slot-scope="scope">-->
<!--                                <el-checkbox v-model="scope.row.status"></el-checkbox>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                        <el-table-column>-->
<!--                            <template slot-scope="scope">-->
<!--                                <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                        <el-table-column width="60">-->
<!--                            <template slot-scope="scope">-->
<!--                                <i class="el-icon-edit"></i>-->
<!--                                <i class="el-icon-delete"></i>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                    </el-table>-->
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="15">
            <el-col :span="12">
                <el-card>
                    <img src="../../assets/img/4.png" class="crawl_process">
<!--                    <div style="width: 100%; height: 400px;" ref="pieChart">-->
<!--                    </div>-->
<!--                    <schart ref="pie" class="schart" canvasId="pie" :data="data" type="pie" :options="options"></schart>-->
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <img src="../../assets/img/22.png" class="crawl_process">
<!--                    <schart ref="line" class="schart" canvasId="line" :data="data" type="line" :options="options2"></schart>-->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import bus from '../common/bus';
    import request from '../../../src/utils/request.js'
    import {formatDate} from '../../../src/utils/date.js'
    export default {
        name: 'dashboard',
        data() {
            return {
                charts: '',
                lineEcharts: '',
                lineData: [],
                lineOption: [],
                data: [],
                option1: [],
                date: new Date(),
                abc_img: [
                    { src: require("../../../src/assets/img/10.jpg") },
                    { src: require("../../../src/assets/img/11.jpg") },
                    { src: require("../../../src/assets/img/12.jpg") },
                    { src: require("../../../src/assets/img/21.jpg") },
                    // { src: require("../../../src/assets/img/20.png") },
                    // { src: require("../../../src/assets/img/22.png") },
                ],
                // name: localStorage.getItem('ms_username'),
                // options: {
                //
                //     showValue: false,
                //     fillColor: 'rgb(45, 140, 240)',
                //     bottomPadding: 30,
                //     topPadding: 30
                // },
                // options2: {
                //     title: '不同平台的采集数量',
                //     // fillColor: '#FC6FA1',
                //     // axisColor: '#008ACD',
                //     // contentColor: '#EEEEEE',
                //     // bgColor: '#F5F8FD',
                //     bottomPadding: 30,
                //     topPadding: 30
                // }
            }
        },
        // components: {
        //     Schart
        // },
        // computed: {
        //     role() {
        //         return this.name === 'admin' ? '超级管理员' : '普通用户';
        //     }
        // },
        filters: {
            formatDate(time) {
                var date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
            }
        },
        created(){
            this.handleListener();
            this.changeDate();
            this.getPieData()
            this.getLineData()
        },
        activated(){
            this.handleListener();
        },
        // deactivated(){
        //     window.removeEventListener('resize', this.renderChart);
        //     bus.$off('collapse', this.handleBus);
        // },
        mounted () {
            let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(() => {
                _this.date = new Date(); // 修改数据date
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        },
        methods: {
            drawLine(){
                this.lineEcharts = this.$echarts.init(this.$refs.lineChart)
                this.lineEcharts.setOption({
                    xAxis: {
                        type: 'category',
                        data: this.lineOption
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    title: {
                        text: '不同时间点爬取的数量',
                        textStyle:{
                            fontSize: 16,
                            fontWeight: 'bolder',
                            color: '#333'
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        formatter: "{a}<br/>{b}:{c}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        // bottom: 10,
                        orient: 'vertical',
                        x: 'right',
                        y:30,
                        data: this.lineOption  //标题 ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name: "数量",
                            type: "line",
                            data: this.lineData,
                            label: {
                                normal: {
                                    show: true
                                }
                            }
                            // radius: "65%",
                            // center: ["50%", "60%"],
                            // avoidLabelOverlap: false,
                            // itemStyle: {
                            //     emphasis: {
                            //         shadowBlur: 10,
                            //         shadowOffsetX: 0,
                            //         shadowColor: "rgba(0, 0, 0, 0.5)"
                            //     },
                            // },
                            // data: this.data,  //数据
                        }
                    ]
                })
            },
            drawPie(){
                this.charts = this.$echarts.init(this.$refs.pieChart)
                this.charts.setOption({
                    title: {
                        // left: 'center',
                        x: 'center',
                        y: 30,
                        show: true,
                        text: '各网站数据比率',
                        textStyle:{
                            fontSize: 16,
                            fontWeight: 'bolder',
                            color: '#333'
                        }
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a}<br/>{b}:{c} ({d}%)"
                    },
                    legend: {
                        // bottom: 10,
                        orient: 'vertical',
                        x: 'right',
                        y:30,
                        data: this.option1  //标题 ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name: "比率",
                            type: "pie",
                            radius: "65%",
                            center: ["50%", "60%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                },
                            },
                            data: this.data  //数据
                        }
                    ]
                })
            },
            getLineData() {
                request({
                    url:'/api/selectLine/',
                    method: 'GET'
                }).then(res => {
                    this.lineData = res.data.data
                    this.lineOption = res.data.list
                    this.drawLine()
                })
            },
            getPieData() {
                request({
                    url:'/api/selectPie/',
                    method: 'GET'
                }).then(res => {
                    this.data = res.data.data
                    this.option1 = res.data.list
                    this.drawPie()
                })
            },
            changeDate(){
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                })
            },
            handleListener(){
                // bus.$on('collapse', this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                // window.addEventListener('resize', this.renderChart)
            },
            // handleBus(msg){
            //     setTimeout(() => {
            //         this.renderChart()
            //     }, 300);
            // },
            // renderChart(){
            //     this.$refs.pie.renderChart();
            //     this.$refs.line.renderChart();
            // }
        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .lunbo-box-item{
        width: 100%;
    }
    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
    .crawl_process{
        height: 420px;
        width: 100%;
        /*padding-bottom: 5px;*/
        /*margin-top: -10px;*/
    }
    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 10px;
    }
    .crawl_content{
        text-indent: 2rem;
        line-height: 1.6em;
    }
    .user-avator {
        width: 150px;
        height: 150px;
        /*border-radius: 50%;*/
        margin-left: 50%;
        transform: translate(-50%);
    }

    .user-info-cont {
        padding-left: 40px;
        flex: 1;
        font-size: 15px;
        color: #999;
        padding-bottom: 20px;
    }
    .user-info-name{
        font-size: 20px;
        /*margin-bottom: 7px;*/
        margin-top: 15px;
        margin-left: 16%;
        /*padding-top: 10px;*/
        color: #999;
    }
    /*.user-info-cont div:first-child {*/
    /*    font-size: 28px;*/
    /*    !*margin-top: 10px;*!*/
    /*    color: #222;*/
    /*}*/

    .user-info-list {
        font-size: 14px;
        color: #999;
        padding-left: 25px;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        /*margin-bottom: 20px;*/
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    /*.lunbotu{*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*}*/
    /*.lunbo-box-item{*/
    /*    height: 500px;*/
    /*    width: 500px;*/
    /*}*/
</style>
<style>
    .el-scrollbar__wrap{
        overflow-x: hidden;
    }
</style>
