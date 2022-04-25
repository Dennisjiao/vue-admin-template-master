<template>
    <!--:data表示查出来的数据 :load表示点击数据前箭头，下面显示二级数据
     :tree-props树的属性值，通过这个判断哈希中是true还是false，如果true就显示-->
     <div class="app-container">
        <el-table
        
            :data="list" style="width: 100%" row-key="id" border lazy
            :load="getChildrens"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column label="名称" width="230" align="left">
                <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>

            <el-table-column label="编码" width="220">
                <template slot-scope="{row}">
                        {{ row.dictCode }}
                </template>
            </el-table-column>
            <el-table-column label="值" width="230" align="left">
                <template slot-scope="scope">
                <span>{{ scope.row.value }}</span>
                </template>
                </el-table-column>
            <el-table-column label="创建时间" align="center">
                <template slot-scope="scope">
                <span>{{ scope.row.createTime }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>


<script>
import dict from '@/api/dict'
export default {
    data(){
        
        return{
            list:[] //定义数据字典列表数组

        }
    },

    created(){
        this.getDictList(1)

    },

    methods: {
        //数据字典列表
        getDictList(id){
            dict.dictList(id)
                .then(response=>{
                    this.list = response.data
                })
        },
        //查询子集列表，通过递归实现
        getChildrens(tree, treeNode, resolve) {
            dict.dictList(tree.id).then(response => {
                resolve(response.data)
            })
        }
    }
    
}
</script>
