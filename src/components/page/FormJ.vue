<template>
    <div>
        <el-row :gutter="15">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20">
                    <div class="major-info-card" :class="[StaticLink ? 'major-info-card-open': 'major-info-card-close']">
                        <div class="user-info">
                            <div class="user-info-cont" @click="toggleOpen('StaticLink')">
                                <h3>什么是静态网页？</h3>
                                <i class="el-icon-arrow-up" v-if="StaticLink"></i>
                                <i class="el-icon-arrow-down" v-else></i>
                            </div>
                        </div>
                        <div style="height: 180px">
                            <el-scrollbar style="height: 100%">
                                <p class="crawl_content">静态网站是指全部由HTML（标准通用标记语言的子集）代码格式页面组成的网站，所有的内容包含在网页文件中。网页上也可以出现各种视觉动态效果，如GIF动画、FLASH动画、滚动字幕等，而网站主要是静态化的页面和代码组成，一般文件名均以htm、html、shtml等为后缀。</p>
                            </el-scrollbar>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
<!--                <el-row>-->
                    <el-col>
                        <el-card shadow="hover" class="mgb20">
                            <div class="major-info-card" :class="[modelExample ? 'major-info-card-open': 'major-info-card-close']">
                                <div class="user-info">
                                    <div class="user-info-cont" @click="toggleOpen('modelExample')">
                                        <h3>模板示例</h3>
                                        <i class="el-icon-arrow-up" v-if="modelExample"></i>
                                        <i class="el-icon-arrow-down" v-else></i>
                                    </div>
                                </div>
                                <div class="model_content" style="height: 220px">
                                    <div style="height: 180px">
                                        <el-scrollbar style="height: 100%">
                                            <div class="model_content" v-model="list">
                                                <p>模板名称：{{list.name}}</p>
                                                <p>网址链接：{{list.url}}</p>
                                                <p>标题css：{{list.css}}</p>
                                                <p>子网址css：{{list.css2}}</p>
                                                <p>抓取类型：{{list.type}}</p>
                                                <p>存入表格：{{list.ta}}</p>
                                                <p>操作人：{{list.people}}<el-button type="info" plain class="usemoudle_info" @click="useMoudle">使用模板</el-button></p>
                                            </div>
                                        </el-scrollbar>
                                    </div>
                                </div>

                            </div>
                        </el-card>

                    </el-col>
<!--                    <el-col :span="10">-->
<!--                        <el-card shadow="hover" style="height:263px;">-->
<!--                            <div slot="header" class="clearfix">-->
<!--                                <span>抓取流程</span>-->
<!--                                &lt;!&ndash;                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>&ndash;&gt;-->
<!--                            </div>-->
<!--                            <div class="model_content">-->
<!--                                <p>模板名称：中华人民共和国教育部</p>-->
<!--                                <p>网址链接：http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/</p>-->
<!--                                <p>字段css：#list > li > a</p>-->
<!--                                <p>抓取类型：静态网址</p>-->
<!--                                <p>存入表格：blog_configinfo</p>-->
<!--                                <p>操作人：李旭</p>-->
<!--                            </div>-->
<!--                        </el-card>-->

<!--                    </el-col>-->
<!--                    <el-col :span="8">-->
<!--                        <el-card shadow="hover" :body-style="{padding: '0px'}">-->
<!--                            <div class="grid-content grid-con-2">-->
<!--                                <i class="el-icon-lx-notice grid-con-icon"></i>-->
<!--                                <div class="grid-cont-right">-->
<!--                                    <div class="grid-num">321</div>-->
<!--                                    <div>系统消息</div>-->
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
<!--                                    <div>数量</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </el-card>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--                <el-card shadow="hover" style="height:258px;">-->
<!--                    <div slot="header" class="clearfix">-->
<!--                        <span>模板示例</span>-->
<!--                        <div>-->
<!--                            模板名称：-->
<!--                            网址：-->
<!--                            字段：-->
<!--                            类型：-->
<!--                            存入表格：-->
<!--                            操作人：-->
<!--                        </div>-->
<!--&lt;!&ndash;                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>&ndash;&gt;-->
<!--                    </div>-->
<!--                    <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">-->
<!--                        <el-table-column width="40">-->
<!--                            <template slot-scope="scope">-->
<!--&lt;!&ndash;                                <div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    模板名称：&ndash;&gt;-->
<!--&lt;!&ndash;                                    网址：&ndash;&gt;-->
<!--&lt;!&ndash;                                    字段：&ndash;&gt;-->
<!--&lt;!&ndash;                                    类型：&ndash;&gt;-->
<!--&lt;!&ndash;                                    存入表格：&ndash;&gt;-->
<!--&lt;!&ndash;                                    操作人：&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                                <el-checkbox v-model="scope.row.status"></el-checkbox>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                        <el-table-column>-->
<!--                            <template slot-scope="scope">-->
<!--                                <div>-->
<!--                                    模板名称：-->
<!--                                    网址：-->
<!--                                    字段：-->
<!--                                    类型：-->
<!--                                    存入表格：-->
<!--                                    操作人：-->
<!--                                </div>-->
<!--&lt;!&ndash;                                <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>&ndash;&gt;-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--&lt;!&ndash;                        <el-table-column width="60">&ndash;&gt;-->
<!--&lt;!&ndash;                            <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                                <i class="el-icon-edit"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                <i class="el-icon-delete"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                            </template>&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
<!--                    </el-table>-->
<!--                </el-card>-->
            </el-col>
        </el-row>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 网址类型</el-breadcrumb-item>
                <el-breadcrumb-item>静态模板</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row class="container">
            <el-col :span="15">
                <div class="form-box">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="模板名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="网址链接">
                            <el-input type="textarea" rows="1" v-model="form.link"></el-input>
                        </el-form-item>
                        <el-form-item label="标题css">
                            <el-input v-model="form.css"></el-input>
                        </el-form-item>
                        <el-form-item label="子网址css">
                            <el-input v-model="form.css2"></el-input>
                        </el-form-item>
                        <el-form-item label="抓取类型">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                        <el-form-item label="存入表格">
                            <el-input v-model="form.table"></el-input>
                        </el-form-item>
                        <el-form-item label="操作人">
                            <el-input v-model="form.people"></el-input>
                        </el-form-item>
                        <el-form-item label="日期时间">
                            <el-col>
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <!--                        <el-col class="line" :span="2">-</el-col>-->
                            <!--                        <el-col :span="11">-->
                            <!--                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
                            <!--                        </el-col>-->
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">模板存库</el-button>
                            <el-button type="primary" @click="onCrawl">模板爬取</el-button>
                            <el-button type="primary"
                                       @click="showT"
                                       v-loading.fullscreen.lock="fullscreenLoading"
                                       element-loading-text="正在存库，请等待。。。">
                                查看爬取
                            </el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                        {{dynamic_message}}
                    </el-form>
                </div>
            </el-col>
            <el-col :span="9">
                <h3 class="use_time">用时：</h3>
                <div class="time_wrapper">
                    <img src="../../../src/assets/img/6.jpg" class="myTime_img">
                    <h1 class="myTime">{{str}}</h1>
                    <!--                    <el-button type="primary" round @click="start">开始爬取</el-button>-->
                    <!--                    <el-button type="primary" round @click="stop">停止爬取</el-button>-->
                    <el-button type="primary" round @click="reset">重置时间</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row v-show="showTable">
            <el-card shadow="hover" class="mgb20">
<!--                {{tableData}}-->
                <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" height="400" border
                          class="table" ref="multipleTable">
                    <el-table-column type="selection" width="55" align="center"></el-table-column>
                    <el-table-column
                            label="序号"
                            width="80"
                            type="index"
                    >
                        <template slot-scope="scope">
                            {{ (currentPage - 1) * pagesize + scope.$index + 1 }}
                        </template>
                    </el-table-column>
                    <el-table-column label="名称" sortable width="300">
                        <template slot-scope="scope">
                            <span>{{scope.row.fields.name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="链接" sortable width="380">
                        <template slot-scope="scope">
                            <a :href="scope.row.fields.url" target="_blank" class="a_content">{{scope.row.fields.url}}</a>
<!--                            <span>{{scope.row.fields.url}}</span>-->
                        </template>
                    </el-table-column>
                    <el-table-column label="标签" sortable>
                        <template slot-scope="scope">
                            <span>{{scope.row.fields.label}}</span>
                        </template>
                    </el-table-column>
<!--                    <el-table-column label="操作" width="150" align="center" fixed="right">-->
<!--                        <template slot-scope="scope">-->
<!--                            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row.pk, scope.row)">编辑-->
<!--                            </el-button>-->
<!--                            <el-button type="text" icon="el-icon-delete" class="red"-->
<!--                                       @click="handleDelete(scope.row.pk, scope.row)">删除-->
<!--                            </el-button>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
                </el-table>
<!--                <el-table :data=tableData border>-->
<!--                    <el-table-column type="selection" width="55" align="center"></el-table-column>-->
<!--                    <el-table-column label="标题" sortable width="250">-->
<!--                        <template slot-scope="scope">-->
<!--                            <span>{{scope.row.fields.name}}</span>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="网址" width="180">-->
<!--                        <template slot-scope="scope">-->
<!--                            <span>{{scope.row.fields.url}}</span>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="标签">-->
<!--                        <template slot-scope="scope">-->
<!--                            <span>{{scope.row.fields.label}}</span>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                </el-table>-->
            </el-card>
            <div class="pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="currentPage" :page-sizes="[5, 20, 50, 100]"
                               :page-size="pagesize"
                               layout="total, sizes, prev, pager, next, jumper"
                               background
                               :total="tableData.length">
                </el-pagination>
            </div>
        </el-row>

    </div>
</template>

<script>
    import request from '../../../src/utils/request'
    export default {
        name: 'formJ',
        data: function(){
            return {
                fullscreenLoading: false,
                // loading: false,
                h: 0, // 定义时，分，秒，毫秒并初始化为0；
                m: 0,
                ms: 0,
                s: 0,
                time: 0,
                str: '00:00:00:000',
                mytime: '',
                hour: '00',
                min: '00',
                sen: '00',
                msen: '00',
                currentPage:1,
                pagesize:5,
                showTable: false,
                modelExample: false,
                dynamic_message: '',
                StaticLink: false,
                list: {
                    name: '中华人民共和国教育部',
                    url: 'http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/',
                    css: '#list > li > a',
                    css2: 'a::attr(href)',
                    type: '静态网址',
                    ta: 'blog_configinfo',
                    people: '李旭'
                },
                form: {
                    name: '',
                    link: '',
                    css: '',
                    css2: '',
                    type: '',
                    table: '',
                    people: '',
                    date1: '',
                    date2: '',
                },
                iconStatus: false,
                tableData: [],
                id: 6670
            }
        },
        mounted () {
            this.getId()
        },
        methods: {
            getId(){
                request({
                    url: '/api/getId/',
                    method: 'GET',
                }).then(response => {
                    this.id = response.data.id
                    console.log(this.id)
                })
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            timer () { // 定义计时函数
                this.ms = this.ms + 50 // 毫秒
                if (this.ms >= 1000) {
                    this.ms = 0
                    this.s = this.s + 1 // 秒
                }
                if (this.s >= 60) {
                    this.s = 0
                    this.m = this.m + 1 // 分钟
                }
                if (this.m >= 60) {
                    this.m = 0
                    this.h = this.h + 1 // 小时
                }
                this.str = this.toDub(this.h) + ':' + this.toDub(this.m) + ':' + this.toDub(this.s) + ' '+this.toDubms(this.ms);
                // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
                this.hour = this.toDub(this.h)
                this.min = this.toDub(this.m)
                this.sen = this.toDub(this.s)
                this.msen = this.toDubms(this.ms)
            },
            reset () { // 重置
                clearInterval(this.time)
                this.h = 0
                this.m = 0
                this.ms = 0
                this.s = 0
                this.str = '00:00:00:000'
                this.hour = '00'
                this.min = '00'
                this.sen = '00'
                this.msen = '00'
                console.log('重置时间：',this.time)
            },

            start () { // 开始
                clearInterval(this.time)
                this.time = setInterval(this.timer, 50)
                console.log('开始时间：',this.time)
            },

            stop () { // 暂停
                clearInterval(this.time)
                console.log('结束时间：',this.time)
            },

            toDub (n) { // 补0操作
                if (n < 10) {
                    return '0' + n
                } else {
                    return '' + n
                }
            },

            toDubms (n) { // 给毫秒补0操作
                if (n < 10) {
                    return '00' + n
                } else {
                    return '' + n
                }
            },


            useMoudle() {
                this.form.link = this.list.url
                this.form.table = this.list.ta
                this.form.type = this.list.type
                this.form.name = this.list.name
                this.form.css = this.list.css
                this.form.css2 = this.list.css2
                this.form.people = this.list.people
            },
            toggleOpen (name) {
                this[name] = !this[name]
            },
            onSubmit() {
                request({
                    url: '/api/addConfig/',
                    method: 'GET',
                    params: {
                        status_select: 1,
                        link: this.form.link,
                        static_css: this.form.css,
                        static_url: this.form.css2,
                        static_type: this.form.type,
                        static_t: this.form.table,
                        static_people: this.form.people
                    }
                }).then(response => {
                    // setTimeout(() => {
                    //     console.log(11111111)
                    // }, 5000)
                    this.dynamic_message = response.data.message
                })
                this.$message.success('提交成功！');
            },
            onCrawl() {
                this.$message.success('开始爬取！');
                console.log(this.form.link)
                console.log(this.form.date1)
                this.start()
                request({
                    url: '/api/crawl/',
                    method: 'GET',
                    params: {
                        status_select: 1,
                        link: this.form.link,
                        static_css: this.form.css,
                        static_url: this.form.css2,
                        static_type: this.form.type,
                        static_name: this.form.name,
                        static_date1: this.form.date1,
                        // static_t: this.form.table,
                        // static_people: this.form.people
                    }
                }).then(response => {
                    // setTimeout(() => {
                    //     console.log(11111111)
                    // }, 5000)
                    this.dynamic_message = response.data.message
                    this.$message.success('爬取完成！');
                    // this.id = response.data.id
                    this.stop()

                })
                // this.showT()
                // this.$message.success('提交成功！');
            },
            showT(){
                this.fullscreenLoading = true;
                console.log(this.id)
                request({
                    url: '/api/getCrawlData/',
                    method: 'GET',
                    params: {
                        id: this.id
                        // status_select: 1,
                        // name: this.form.name,
                        // link: this.form.link,
                        // static_css: this.form.css,
                        // static_type: this.form.type,
                    }
                }).then(response => {
                    this.tableData = JSON.parse(response.data.data)
                    if (this.tableData.length < 10){
                        console.log('无~~')
                        this.showT()
                    }
                     else {
                        this.showTable = true
                        console.log('有数据了~~~')
                        this.fullscreenLoading = false
                    }
                        // this.$alert('还未存库完成，请稍等查看', '提示', {
                        //     confirmButtonText: '确定',
                        //     callback: action => {
                        //         this.$message({
                        //             type: 'info',
                        //             message: `action: ${ action }`
                        //         });
                        //     }
                        // });

                    // console.log(this.tableData)

                })

    }
        }
    }
</script>
<style scoped>
    .mgb20 {
        margin: 0 10px 20px 10px;

    }
    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }
    .user-info-cont {
        padding-left: 40px;
        flex: 1;
        font-size: 16px;
        color: #999;
    }
    /*.user-info-cont {*/
    /*    position: relative;*/
    /*    font-weight: bold;*/
    /*    padding: 4px 0 6px 0;*/
    /*    border-bottom: 1px solid #495bb021;*/
    /*    .el-icon-arrow-up {*/
    /*        position: absolute;*/
    /*        right: 10px;*/
    /*        top: 8px;*/
    /*        transition: all .2s;*/
    /*        transform: rotate(90deg);*/
    /*        font-size: 12px;*/
    /*    }*/
    /*}*/
    .major-info-card {
        padding: 10px;
        margin: 0 20px 10px;
        position: relative;
        min-height: 20px;
        overflow: hidden;
    }
    .major-info-card-close {
         height: 40px;
    }
    .major-info-card-open {
        height: 250px;
    }
    .crawl_content{
        text-indent: 2rem;
        line-height: 1.6em;
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
        /*overflow: hidden;*/
    }
    .model_content p{
        margin-bottom: 10px;
    }
    .el-icon-arrow-up {
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 12px;
        /*font-size: 12px;*/
        color: #b5b5b5;
        /*transform: rotate(180deg);*/
    }
    .el-icon-arrow-down {
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 12px;
        /*font-size: 12px;*/
        color: #b5b5b5;
        /*transform: rotate(180deg);*/
    }
    .model_content{
        padding-left: 25px;
    }
    .a_content{
        color: #606266;
    }
</style>
