<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt="">
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">上次登录时间：<span>2020-01-01</span></div>
          <div class="user-info-list">上次登录地点：<span>上海</span></div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>
          Vue <el-progress :percentage="50" color="#42b983"></el-progress>
          JavaScript <el-progress :percentage="60" color="#f1e05a"></el-progress>
          CSS <el-progress :percentage="70"></el-progress>
          HTML <el-progress :percentage="80" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-card shadow="hover" style="height:403px;">
        <div slot="header" class="clearfix">
          <span>待办事项</span>
          <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <el-table :data="todoList" :show-header="false" height="304" style="width: 100%; font-size: 14px;">
          <el-table-column width="40">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.status"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
            </template>
          </el-table-column>
          <el-table-column width="60">
            <template slot-scope="scope">
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  data() {
    return {
      name: localStorage.getItem('ms_username'),
      todoList: [{
        title: '每天都要看书啊，最近在看<hacker and painter>',
        stauts: true,
      },
      {
        title: '学习了要总结呀，记得写博客',
        status: false,
      },
      {
        title: '每天都要锻炼啊，身体重要',
        status: true,
      },
      {
        title: 'Learning English words everyday',
        status: false,
      }
      ],
    }
  },
  computed: {
    role() {
      return this.name === 'xietian' ? '超级管理员' : '普通用户';
    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  color: #999;
  font-size: 14px;
  flex: 1;
}
.user-info-name {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  color: #999;
  font-size: 14px;
  line-height: 25px;
}
.user-info-list span {
  margin-left: 70px;
}
.mgb20 {
  margin-bottom: 20px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-con-icon {
  font-size: 50px;
  color: #fff;
  height: 100px;
  width: 100px;
  text-align: center;
  line-height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 14px;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.grid-con-1 .grid-con-icon {
  background-color: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background-color: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}
.grid-con-3 .grid-con-icon {
  background-color: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
