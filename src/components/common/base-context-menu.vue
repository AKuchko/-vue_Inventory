<template>
    <div ref="menu"
        class="context-menu"
        :class="isActive">
        <ul class="context-menu__list">
            <li
                v-for="item in items"
                :key="item.id"
                class="context-menu__item"
                @click="clickMethod(item.action)">
                <icon v-if="item.icon" :icon="item.icon"></icon>
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  name: 'ContextMenu',
  emits: ['open-context-menu'],
  components: { Icon },
  props: {
    items: { type: Array }
  },
  data () {
    return {
      opened: false,
      position: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    isActive () {
      return this.opened ? 'active' : ''
    }
  },
  methods: {
    open (e) {
      this.position.x = e.pageX
      this.position.y = e.pageY
      this.$refs.menu.style.top = `${this.position.y}px`
      this.$refs.menu.style.left = `${this.position.x}px`
      setTimeout(() => { this.opened = true }, 100)
    },
    close () {
      this.opened = false
    },
    clickMethod (func) {
      this.close()
      func()
    }
  }
}
</script>

<style lang="scss">
.context-menu {
    position: fixed;
    width: 80px;
    opacity: 0;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    background: #262626;
    transition: all 0.3s ease;

    &.active {
        width: 150px;
        opacity: 1;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        padding: 20px;
        border-radius: 10px;
        transition: all 0.1s ease-in-out;
    }

    &__item:hover {
        background: #343434;
    }
}
</style>
