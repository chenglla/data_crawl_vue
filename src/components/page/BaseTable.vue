<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 数据表格</el-breadcrumb-item>
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
            <el-table :data="data_content.slice((currentPage-1)*pagesize,currentPage*pagesize)" height="400" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
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
<!--                <el-table-column label="序号" sortable width="50">-->
<!--                    <template slot-scope="scope">-->
<!--                        <span>{{scope.row.pk}}</span>-->
<!--                    </template>-->
<!--                </el-table-column>-->
                <el-table-column label="标题" sortable width="250">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="label" label="类型" width="120">
                    <template slot-scope="scope">
                        <span>{{scope.row.fields.label}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="url" label="链接" :formatter="formatter">
                    <template slot-scope="scope">
                        <a :href="scope.row.fields.url" target="_blank" class="a_content">{{scope.row.fields.url}}</a>
<!--                        <span>{{scope.row.fields.url}}</span>-->
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row.pk, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.row.pk, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="currentPage" :page-sizes="[5, 20, 50, 100]"
                               :page-size="pagesize"
                               layout="total, sizes, prev, pager, next, jumper"
                               background
                               :total="data_content.length">
                </el-pagination>
            </div>
        </div>



        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
<!--                <el-form-item label="日期">-->
<!--                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
<!--                </el-form-item>-->
                <el-form-item label="标题">
                    <el-input v-model="form.name" style="width: 100%;"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-input v-model="form.label"></el-input>
                </el-form-item>
                <el-form-item label="链接">
                    <el-input v-model="form.url"></el-input>
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
    export default {
        name: 'basetable',
        data() {
            return {
                show: false,
                currentPage:1,
                pagesize:5,
                crawlStatus: false,
                // url: './vuetable.json',
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
                    name: '',
                    url: '',
                    label: ''
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
        computed: {
        },
        methods: {
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            // 分页导航
            // handleCurrentChange(val) {
            //     this.cur_page = val;
            //     this.getData();
            // },
            getData() {
                // this.$axios({
                request({
                    url: '/api/selectData/',
                    method: 'GET',
                    params: {
                        page:this.cur_page
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
                return row.url;
            },
            // filterTag(value, row) {
            //     return row.tag === value;
            // },
            handleEdit(index, row) {
                console.log('index:',index)
                // this.idx = index;
                // const item = this.data_content[index];
                // console.log('item:',item)
                // this.form = {
                this.form.name= row.fields.name,
                this.form.url= row.fields.url,
                this.form.label= row.fields.label,
                this.form.id=row.pk
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
                this.editVisible = false;
                request({
                    url: '/api/saveEdit/',
                    method: 'GET',
                    params: {
                        name: this.form.name,
                        url: this.form.url,
                        label: this.form.label,
                        id: this.form.id,
                    }
                }).then(response => {
                    // this.editVisible = false;
                    this.getData()

                })
                this.$message.success('修改成功！');
                // this.$set(this.data_content, this.idx, this.form);

                // this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                // const item = this.data_content[this.idx]
                // console.log('1',this.data_content[this.idx])
                // console.log('item:',item)
                request({
                    url: '/api/delData/',
                    method: 'GET',
                    params: {
                        id: this.idx
                    }
                }).then(response => {
                    // this.form = response.data.data
                    this.delVisible = false;
                    this.getData()
                })
                this.$message.success('删除成功')

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
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
    }
    .a_content{
        color: #606266;
    }
</style>
