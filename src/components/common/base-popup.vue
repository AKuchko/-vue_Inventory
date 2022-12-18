<template>
    <div class="popup" :class="VisiblePopup" @click="closePopup">
        <base-block class="popup__content" @click.stop>
            <form class="popup__form" @submit.prevent="getModelData">
                <base-input class="popup__input"
                    v-for="input in inputs" :key="input.id"
                    :label="input.label"
                    :type="input.type"
                    :options="input.options"
                    :ref="input.id"/>
                <base-button type="submit">Submit</base-button>
            </form>
        </base-block>
    </div>
</template>

<script>
import BaseBlock from './base-block.vue'
import BaseInput from './base-input.vue'
import BaseButton from './base-button.vue'

export default {
  name: 'BasePopup',
  components: { BaseBlock, BaseInput, BaseButton },
  emits: ['add-item'],
  data () {
    return {
      isActive: false,
      model: {}
    }
  },
  props: {
    inputs: { type: Array, default: () => [{ id: 'id', label: 'base' }] }
  },
  methods: {
    getModelData () {
      for (const input of this.inputs) this.model[input.id] = this.$refs[input.id][0].inputModel
      this.isActive = false
      this.$emit('add-item', this.model)
    },
    openPopup () {
      this.isActive = true
    },
    closePopup () {
      this.isActive = false
    }
  },
  computed: {
    VisiblePopup () {
      return this.isActive ? 'active' : ''
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s ease-in-out;
    background: rgba($color: #000000, $alpha: .5);

    &.active {
        visibility: visible;
        opacity: 1;
    }

    &__content {
        padding: 40px;
    }

    &__input:not(:last-child) {
        margin-bottom: 10px;
    }
}
</style>
