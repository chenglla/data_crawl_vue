<template>
    <div>
        <el-row :gutter="15">
            <el-col :span="10">
                <el-card shadow="hover" class="mgb20">
                    <div class="major-info-card" :class="[dynamicLink ? 'dynamic-open': 'dynamic-close']">
                        <div class="user-info">
                            <div class="user-info-cont" @click="toggleOpen('dynamicLink')">
                                <h3>什么是动态网页？</h3>
                                <i class="el-icon-arrow-up" v-if="dynamicLink"></i>
                                <i class="el-icon-arrow-down" v-else></i>
                            </div>
                        </div>
                        <div style="height: 150px">
                            <el-scrollbar style="height: 100%">
                                <p class="crawl_content">动态网站并不是指具有动画功能的网站，而是指网站内容可根据不同情况动态变更的网站，一般情况下动态网站通过数据库进行架构。 动态网站除了要设计网页外，还要通过数据库和编程序来使网站具有更多自动的和高级的功能。动态网站体现在网页一般是以asp，jsp，php，aspx等技术，而静态网页一般是HTML（标准通用标记语言的子集）结尾，动态网站服务器空间配置要比静态的网页要求高，费用也相应的高，不过动态网页利于网站内容的更新，适合企业建站。动态是相对于静态网站而言。</p>
                            </el-scrollbar>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="14">
                <!--                <el-row>-->
                <el-col>
                    <el-card shadow="hover" class="mgb20">
                        <div class="major-info-card" :class="[modelExample ? 'dynamic-open': 'dynamic-close']">
                            <div class="user-info">
                                <div class="user-info-cont" @click="toggleOpen('modelExample')">
                                    <h3>模板示例</h3>
                                    <i class="el-icon-arrow-up" v-if="modelExample"></i>
                                    <i class="el-icon-arrow-down" v-else></i>
                                </div>
                            </div>
                            <div class="model_content" style="height: 220px">
                                <div style="height: 150px">
                                    <el-scrollbar style="height: 100%">
                                        <div v-model="list" class="model_info">
                                            <p>模板名称：{{list.name}}</p>
                                            <p>网址链接：{{list.url}}</p>
                                            <p>全部数据：{{list.data}}</p>
                                            <p>标题css：{{list.css1}}</p>
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
            </el-col>
        </el-row>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 网址类型</el-breadcrumb-item>
                <el-breadcrumb-item>动态模板</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row class="container">
            <el-col :span="15">
                <div class="form-box">
                    <el-form ref="form" :model="form" label-width="80px" v-loading="loading" element-loading-text="正在爬取，请等待。。。">
                        <el-form-item label="模板名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <!--                    <el-form-item label="选择器">-->
                        <!--                        <el-select v-model="form.region" placeholder="请选择">-->
                        <!--                            <el-option key="bbk" label="步步高" value="bbk"></el-option>-->
                        <!--                            <el-option key="xtc" label="小天才" value="xtc"></el-option>-->
                        <!--                            <el-option key="imoo" label="imoo" value="imoo"></el-option>-->
                        <!--                        </el-select>-->
                        <!--                    </el-form-item>-->

                        <!--                    <el-form-item label="城市级联">-->
                        <!--                        <el-cascader :options="options" v-model="form.options"></el-cascader>-->
                        <!--                    </el-form-item>-->
                        <!--                    <el-form-item label="选择开关">-->
                        <!--                        <el-switch v-model="form.delivery"></el-switch>-->
                        <!--                    </el-form-item>-->
                        <!--                    <el-form-item label="多选框">-->
                        <!--                        <el-checkbox-group v-model="form.type">-->
                        <!--                            <el-checkbox label="步步高" name="type"></el-checkbox>-->
                        <!--                            <el-checkbox label="小天才" name="type"></el-checkbox>-->
                        <!--                            <el-checkbox label="imoo" name="type"></el-checkbox>-->
                        <!--                        </el-checkbox-group>-->
                        <!--                    </el-form-item>-->
                        <!--                    <el-form-item label="单选框">-->
                        <!--                        <el-radio-group v-model="form.resource">-->
                        <!--                            <el-radio label="步步高"></el-radio>-->
                        <!--                            <el-radio label="小天才"></el-radio>-->
                        <!--                            <el-radio label="imoo"></el-radio>-->
                        <!--                        </el-radio-group>-->
                        <!--                    </el-form-item>-->
                        <el-form-item label="网址链接">
                            <el-input type="textarea" rows="1" v-model="form.link"></el-input>
                        </el-form-item>
                        <el-form-item label="全部数据">
                            <el-input v-model="form.allData"></el-input>
                        </el-form-item>
                        <el-form-item label="标题css">
                            <el-input v-model="form.css1"></el-input>
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
                        <!--                    <el-form-item label="文本框">-->
                        <!--                        <el-input type="textarea" rows="1" v-model="form.desc"></el-input>-->
                        <!--                    </el-form-item>-->
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
<!--                        <h1 class="myTime">{{str}}</h1>-->
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
        name: 'formD',
        data: function(){
            return {
                fullscreenLoading: false,
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
                tableData: [],
                id: 6670,
                currentPage:1,
                pagesize:5,
                showTable: false,
                loading: false,
                dynamicLink: false,
                modelExample: false,
                dynamic_message: '',
                list:{
                    name: '腾讯新闻',
                    url: 'https://pacaio.match.qq.com/irs/rcd?cid=137&token=d0f13d594edfc180f5bf6b845456f3ea&ext=top&page=0',
                    data: 'data',
                    css1: 'title',
                    css2: 'vurl',
                    type: '动态网址',
                    ta: 'blog_configinfo',
                    people: '程璐璐'
                },
                form: {
                    link: '',
                    name: '',
                    css1: '',
                    css2: '',
                    type: '',
                    table: '',
                    people: '',
                    date1: '',
                    // date2: '',
                    allData: '',

                    // delivery: true,
                    // type: '',
                    // resource: '小天才',
                    // desc: '',
                    // options: []
                }
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
                    console.log('ssssss',this.id)
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
                this.form.name = this.list.name
                this.form.css1 = this.list.css1
                this.form.css2 = this.list.css2
                this.form.allData = this.list.data
                this.form.people = this.list.people
                this.form.table = this.list.ta
                this.form.type = this.list.type
            },
            toggleOpen (name) {
                console.log(name, this[name])
                this[name] = !this[name]
            },
            onSubmit() {
                // this.loading = true
                request({
                    url: '/api/addConfig/',
                    method: 'GET',
                    params: {
                        status_select: 2,
                        dynamic_link: this.form.link,
                        dynamic_css1: this.form.css1,
                        dynamic_css2: this.form.css2,
                        dynamic_type: this.form.type,
                        dynamic_t: this.form.table,
                        dynamic_people: this.form.people,
                        dynamic_data: this.form.allData
                    }
                }).then(response => {
                    setTimeout(() => {
                        console.log(11111111)
                    }, 5000)
                    this.dynamic_message = response.data.message
                    this.$message.success('存库成功！');
                })

            },
            onCrawl() {
                console.log('hahahhhhh')
                this.start()
                this.loading = true
                // setTimeout(() => {
                //     // this.loading = true
                //     console.log(11111111)
                //
                // console.log('hehheheheh')
                //
                // console.log(this.form.date1)
                // console.log()
                request({
                    url: '/api/crawl/',
                    method: 'GET',
                    params: {
                        status_select: 2,
                        dynamic_link: this.form.link,
                        dynamic_css1: this.form.css1,
                        dynamic_css2: this.form.css2,
                        dynamic_type: this.form.type,
                        dynamic_date: this.form.date1,
                        dynamic_name: this.form.name,
                        // dynamic_t: this.form.table,
                        // dynamic_people: this.form.people,
                        dynamic_data: this.form.allData
                    }
                }).then(response => {
                    // setTimeout(() => {
                    //     console.log(11111111)
                    // }, 5000)
                    this.dynamic_message = response.data.message
                    this.loading = false
                    this.$message.success('爬取完成！请在数据查询模块查看');
                    this.stop()
                })
                // }, 5000)

            },
            showT(){
                this.fullscreenLoading = true;
                console.log('showT:', this.id)
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
                    if (this.tableData.length < 20){
                        // console.log('无~~')
                        this.showT()
                    }
                    else {
                        this.showTable = true
                        // console.log('有数据了~~~')
                        this.fullscreenLoading = false
                    }
                    // console.log(this.tableData)
                    // this.showTable = true
                })

            }
        }
    }
</script>
<style>
    .major-info-card {
        padding: 10px;
        margin: 0 20px 5px;
        position: relative;
        min-height: 20px;
        overflow: hidden;
    }
    .dynamic-close {
        height: 40px;
    }
    .dynamic-open {
        height: 220px;
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
    .mgb20 {
        margin-bottom: 20px;
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
    .usemoudle_info {
        margin-left: 40%;
        margin-top: -10px;
        /*margin-bottom: 5px;*/
        /*position: relative;*/
    }
    .model_info{
        padding-bottom: 10px;
        padding-left: 25px;
    }
    .container{
        height: auto;
        margin-bottom: 10px;
    }
    .myTime{
        /*background: #bbb;*/
        color: #bbb;
        margin-bottom: 15px;
        /*display: block;*/
    }
    .use_time{
        margin: 80px 0 10px 60px;
    }
    .myTime_img{
        margin-top: 7px;
        width:120px;
        height: 120px;
        margin-bottom: 7px;
        /*margin-top: 100px;*/
    }
    /*#mytime{*/
    /*    background: #bbb;*/
    /*    color: #fff;*/
    /*    display: block;*/
    /*}*/
    .time_wrapper{
        text-align: center;
        /*padding-top: 100px;*/
        width: 80%;
        /*margin-top: 100px;*/
        /*border-radius: 50%;*/
    }
    .a_content{
        color: #606266;
    }
</style>
<style>
    body {
        margin: 0;
    }
     .el-scrollbar__wrap {
         overflow-x: hidden;
     }
</style>
