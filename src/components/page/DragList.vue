<template>
  <section class="main">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrum-item><i class="el-icon-rank"></i> 拖拽组件</el-breadcrum-item>
        <el-breadcrumb-item>拖拽排序</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="drag-box">
        <div class="drag-box-item">
          <div class="item-title">todo</div>
          <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
            <transition-group tag='div' id='todo' class="item-ul">
              <div v-for="item in todo" class="drag-list" :key="item.id">
                {{item.content}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'draglist',
  data() {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        group: 'sortlist',
        ghostClass: 'ghost-style'
      },
      todo: [
        {
          id: 1,
          content: '每天都要锻炼'
        },
        {
          id: 2,
          content: '每天都要背单词'
        },
        {
          id: 3,
          content: '每天都要学习'
        }
      ],
      doing: [
        {
          id: 1,
          content: 'Nginx配置项学习，反向代理负载均衡'
        },
        {
          id: 2,
          content: 'JS语法熟练使用，ES6标准熟练应用'
        },
        {
          id: 3,
          content: 'webpack了解各个配置项'
        },
        {
          id: 4,
          content: '写个自己的导航页面方便使用'
        }
      ],
      done: [
        {
          id: 1,
          content: '目前为止还没有什么彻底完成的事情，都在过程中或即将开始'
        },
        {
          id: 2,
          content: '博客搭建ok，记得总结学习博客'
        }
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    removeHandle(event) {
      console.log(event);
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id}`);
    }
  }
}
</script>
<style>
</style>
