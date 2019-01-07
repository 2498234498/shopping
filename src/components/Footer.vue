<template>
  <ul>
    <li
      v-for="(item, index) in footerTab"
      :key="index"
      @click="$router.push({name: item.path})"
      :class="footerTab.map(ele => $route.path.split('/')[1] === item.path ? 'highlight' : '')[index]">
      <a>{{item.name}}</a>
      <i class="iconfont" :class="item.icon"></i>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      footerTab: [
        { name: '首页', icon: 'icon-shouye', path: 'home' },
        { name: '分类', icon: 'icon-leimupinleifenleileibie', path: 'class' },
        { name: '发现', icon: 'icon-faxian', path: 'find' },
        { name: '购物车', icon: 'icon-gouwuche', path: 'cart' },
        { name: '我的', icon: 'icon-wode', path: 'person' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  height: 44px;
  width: 100%;
  display: flex;
  border-top: 1px solid #cbcbcb;
  position: fixed;
  bottom: 0;
  right: 0;
  li {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .iconfont {
      color: #2e2c2c;
    }
    a {
      color: #2e2c2c;
      font-size: 12px;
    }
  }
  .highlight {
    .iconfont {
      color: #e2231a;
    }
    a {
      color: #e2231a;
    }
  }
}
</style>
