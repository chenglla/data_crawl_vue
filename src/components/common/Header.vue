<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">数据抓取平台</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
<!--                <div class="btn-bell">-->
<!--                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">-->
<!--                        <router-link to="/tabs">-->
<!--                            <i class="el-icon-bell"></i>-->
<!--                        </router-link>-->
<!--                    </el-tooltip>-->
<!--                    <span class="btn-bell-badge" v-if="message"></span>-->
<!--                </div>-->
                <!-- 用户头像 -->
<!--                <div class="user-avator"><img src="../../assets/img/1..jpg"></div>-->
                <!-- 用户名下拉菜单 -->
<!--                <el-dropdown class="user-name" trigger="click" @command="handleCommand">-->
<!--                    <span class="el-dropdown-link">-->
<!--                        {{username}} <i class="el-icon-caret-bottom"></i>-->
<!--                    </span>-->
<!--                    <el-dropdown-menu slot="dropdown">-->
<!--&lt;!&ndash;                        <a href="http://blog.gdfengshuo.com/about/" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-dropdown-item>关于作者</el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--&lt;!&ndash;                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">&ndash;&gt;-->
<!--&lt;!&ndash;                            <el-dropdown-item>项目仓库</el-dropdown-item>&ndash;&gt;-->
<!--&lt;!&ndash;                        </a>&ndash;&gt;-->
<!--                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>-->
<!--                        <el-dropdown-item @click.native="updatepwd">修改密码</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </el-dropdown>-->
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="修改密码" :visible.sync="UpdateVisible" width="30%">
            <el-form ref="form" :model="form" label-width="75px">
                <!--                <el-form-item label="日期">-->
                <!--                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
                <!--                </el-form-item>-->
                <el-form-item label="旧密码">
                    <el-input v-model="form.oldPass" style="width: 100%;"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="form.newPass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.confirmPass"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="UpdateVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import bus from '../common/bus';
    import request from '../../../src/utils/request'
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'linxin',
                message: '',
                UpdateVisible: false,
                editVisible: false,
                form: {
                    id: '',
                    oldPass: '',
                    newPass: '',
                    confirmPass: ''
                },
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            saveEdit() {
                this.UpdateVisible = false;
                request({
                    url: '/api/updatePass/',
                    method: 'GET',
                    params: {
                        oldPass: this.form.oldPass,
                        newPass: this.form.newPass,
                        id: this.form.id,
                    }
                }).then(response => {
                    this.message = response.data.message
                    this.$message.success(this.message)
                })
                // this.$message.success(this.message);
            },
            updatepwd() {
                this.UpdateVisible = true
                // this.editVisible = true
            },
            // 用户名下拉菜单选择事件
            // handleCommand(command) {
            //     if(command == 'loginout'){
            //         localStorage.removeItem('ms_username')
            //         this.$router.push('/login');
            //     }
            // },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
