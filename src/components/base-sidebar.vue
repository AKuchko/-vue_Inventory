<template>
    <base-block class="sidebar">
        <div class="sidebar__image">
            <img v-if="info.photo" src="" alt="" class="sidebar__photo">
            <div v-else class="sidebar__no-photo">
                <input type="file">
            </div>
        </div>
        <h2 class="sidebar__name">{{ info.name }}</h2>
        <p class="sidebar__text">{{ info.text }}</p>
    </base-block>
</template>

<script>
import BaseBlock from './common/base-block.vue'
export default {
  name: 'BaseSidebar',
  components: { BaseBlock },
  data () {
    return {
      info: {
        photo: '',
        name: 'Default name',
        text: ''
      }
    }
  }
}
</script>

<style lang="scss">
.sidebar {
    padding: 18px 14px;

    &__image {
        border-radius: 8px;
        width: 100%;
        height: 240px;
    }
}
</style>
