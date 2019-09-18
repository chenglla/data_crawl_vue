<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 模板表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <!--                <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">-->
                <!--                    <el-option key="1" label="广东省" value="广东省"></el-option>-->
                <!--                    <el-option key="2" label="湖南省" value="湖南省"></el-option>-->
                <!--                </el-select>-->
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="data_content.slice((currentPage-1)*pagesize,currentPage*pagesize)" height="400" border
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
<!--                <el-table-column label="序号" sortable width="50" fixed>-->
<!--                    <template slot-scope="scope">-->
<!--                        <span>{{scope.row.pk}}</span>-->
<!--                    </template>-->
<!--                </el-table-column>-->
                <el-table-column label="名称" sortable width="120">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.config_type}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="链接" sortable width="280">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.url}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="字段css1" sortable width="110">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.config_css1}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="字段css2" sortable width="110">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.config_css2}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作人" sortable width="90">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.config_people}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="label" label="类型" width="120">
                    <template slot-scope="scope">
                        <span v-if="scope.row.fields.config_status === 1">静态网址</span>
                        <span v-else>动态网址</span>
                        <!--                        <span v-if="scope.row.fields.config_status === 1">{{ scope.row.fields.config_status}}</span>-->
                    </template>
                </el-table-column>
                <el-table-column prop="url" label="创建时间" width="200">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.config_createTime | formatDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row.pk, scope.row)">编辑
                        </el-button>
                        <el-button type="text" icon="el-icon-delete" class="red"
                                   @click="handleDelete(scope.row.pk, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="currentPage" :page-sizes="[4, 20, 50, 100]"
                               :page-size="pagesize"
                               layout="total, sizes, prev, pager, next, jumper"
                               background
                               :total="data_content.length">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <!--                <el-form-item label="日期">-->
                <!--                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
                <!--                </el-form-item>-->
                <el-form-item label="名称">
                    <el-input v-model="form.config_type" style="width: 100%;"></el-input>
                </el-form-item>
                <el-form-item label="链接">
                    <el-input v-model="form.url"></el-input>
                </el-form-item>
                <el-form-item label="字段css1">
                    <el-input v-model="form.config_css1"></el-input>
                </el-form-item>
                <el-form-item label="字段css2">
                    <el-input v-model="form.config_css2" style="width: 100%;"></el-input>
                </el-form-item>
                <el-form-item label="操作人">
                    <el-input v-model="form.config_people"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-input v-model="form.config_status" placeholder="1表示静态网址，2表示动态网址"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.config_createTime"
                                    value-format="yyyy-MM-dd HH:MM" style="width: 100%;"></el-date-picker>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import request from '../../../src/utils/request'
    import {formatDate} from '../../../src/utils/date.js'

    export default {
        name: 'basetable',
        data() {
            return {
                // url: './vuetable.json',
                show: false,
                currentPage:1,
                pagesize:4,
                data_message: '',
                data_content: [],
                // tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                edit_data: [],
                form: {
                    id: '',
                    config_type: '',
                    url: '',
                    config_css1: '',
                    config_css2: '',
                    config_people: '',
                    config_status: '',
                    config_createTime: '',
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        // mounted() {
        //     this.getData()
        // },
        computed: {},
        filters: {
            formatDate(time) {
                var date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm')
            }
        },
        methods: {
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            // // 分页导航
            // handleCurrentChange(val) {
            //     this.cur_page = val;
            //     this.getData();
            // },
            getData() {
                // this.$axios({
                request({
                    url: '/api/selectConfig/',
                    method: 'GET',
                    params: {
                        page: this.cur_page
                    }
                }).then(response => {
                    this.data_message = response.data.message
                    this.data_content = JSON.parse(response.data.data)
                })
                console.log('data_ocntent:', this.data_content)
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.config_createTime;
            },
            // filterTag(value, row) {
            //     return row.tag === value;
            // },
            handleEdit(index, row) {
                console.log('index:', index)
                console.log(row)
                // this.idx = index;
                // const item = this.data_content[index];
                // console.log('item:', item)
                // this.form = {
                this.form.config_type = row.fields.config_type,
                this.form.url = row.fields.url,
                this.form.config_css1 = row.fields.config_css1,
                this.form.config_css2 = row.fields.config_css2,
                this.form.config_people = row.fields.config_people,
                this.form.config_status = row.fields.config_status,
                this.form.config_createTime = row.fields.config_createTime,
                this.form.id = row.pk
                // }
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            // delAll() {
            //     const length = this.multipleSelection.length;
            //     let str = '';
            //     this.del_list = this.del_list.concat(this.multipleSelection);
            //     for (let i = 0; i < length; i++) {
            //         str += this.multipleSelection[i].name + ' ';
            //     }
            //     this.$message.error('删除了' + str);
            //     this.multipleSelection = [];
            // },
            // handleSelectionChange(val) {
            //     this.multipleSelection = val;
            // },
            // 保存编辑
            saveEdit() {
                console.log(this.form.config_type)
                request({
                    url: '/api/saveEditMoudle/',
                    method: 'GET',
                    params: {
                        config_type: this.form.config_type,
                        url: this.form.url,
                        config_css1: this.form.config_css1,
                        config_css2: this.form.config_css2,
                        config_people: this.form.config_people,
                        config_status: this.form.config_status,
                        config_createTime: this.form.config_createTime,
                        id: this.form.id
                    }
                }).then(response => {

                    // console.log(1111111111)
                    this.editVisible = false;
                    this.getData()
                    // this.edit_data = response.data.data
                    // this.form = response.data.data
                })
                this.$message.success('修改成功！');
                // this.$set(this.data_content, this.idx, this.form);

                // this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow() {
                // const item = this.data_content[this.idx]
                // console.log('1', this.data_content[this.idx])
                // console.log('item:',item)
                request({
                    url: '/api/delConfig/',
                    method: 'GET',
                    params: {
                        id: this.idx
                    }
                }).then(response => {
                    this.delVisible = false;
                    this.getData()
                    // this.form = response.data.data
                })
                this.$message.success('删除成功');

            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .del-dialog-cnt {
        font-size: 16px;
        text-align: center
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }
</style>
