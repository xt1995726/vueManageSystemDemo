<template>
  <div class="tags" v-if="1">
    <ul>
      <li class="tags-li" v-for="(item, index) in tagsList" :key="index" :class="{'active': isActive(item.path)}">
        <router-link :to="item.path" class="tags-li-title">
          {{item.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from './bus';
export default {
  data() {
    return {
      tagsList: []
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      })
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        })
      }
      bus.$emit('tags', this.tagsList);
    }
  },
  created() {
    this.setTags(this.$route);
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
}
</script>
<style>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background-color: #fff;
}
.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  cursor: pointer;
  background-color: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
}
.tags-li:not(.active):hover {
  background: #f8f8f8;
}
.tags-li.active {
  color: #fff;
  background-color: #409eff;
}
.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}
.tags-li.active .tags-li-title {
  color: #fff;
}
</style>
