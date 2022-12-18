<template>
    <base-block class="inventory">
        <base-popup ref="createPopup" :inputs="popupInputs" @add-item="AddItem"/>
        <context-menu ref="context" :items="[{ id: 1, text: 'Add item', icon: 'material-symbols:add', action: OpenCreatePopup }]"/>
        <table class="inventory__table" @contextmenu.prevent="ShowContext" @click="HideContext">
            <tr v-for="(row, row_key) in rows" :key="row_key" class="inventory__row">
                <th v-for="(column, column_key) in row" :key="column_key" class="inventory__item">
                    <img v-if="column" src="@/assets/ItemImage.svg" alt="" class="inventory__item-image">
                    <p class="inventory__item-count">{{ column_key }}</p>
                </th>
            </tr>
        </table>
    </base-block>
</template>

<script>
import BaseBlock from './common/base-block.vue'
import ContextMenu from './common/base-context-menu.vue'
import BasePopup from './common/base-popup.vue'
import StorageService from '@/client/storage'
export default {
  name: 'BaseInventory',
  components: { BaseBlock, ContextMenu, BasePopup },
  created () {
    // this.inventory = StorageService.getItem('inventory') ? JSON.parse(StorageService.getItem('inventory')) : {}
    console.log(StorageService.getItem('inventory'))
  },
  data () {
    return {
      inventory: {},
      rows: {
        1: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
        2: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
        3: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
        4: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
        5: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} }
      },
      popupInputs: [
        { id: 'name', label: 'Name' },
        { id: 'count', label: 'Count', type: 'number' }
      ]
    }
  },
  methods: {
    ShowContext (e) {
      this.$refs.context.open(e)
    },
    HideContext () {
      this.$refs.context.close()
    },
    OpenCreatePopup () {
      this.$refs.createPopup.openPopup()
    },
    AddItem (data) {
      this.inventory[`${data.name}`] = data
      StorageService.setItem('inventory', JSON.stringify(this.inventory))
    },
    RemoveItem (key) {
      this.inventory[`${key}`].count -= 1
      if (this.inventory[`${key}`].count === 0) delete this.inventory[`${key}`]
      StorageService.setItem('inventory', JSON.stringify(this.inventory))
    }
  }
}
</script>

<style lang="scss">
.inventory {
    overflow: hidden;
    &__table {
        border-collapse: collapse;
    }

    &__item {
        width: 105px;
        height: 100px;
        border: 1px solid #4d4d4d;
    }

    &__row:first-child .inventory__item {
        border-top: none;
    }
    &__row .inventory__item:first-child {
        border-left: none;
    }
    &__row .inventory__item:last-child {
        border-right: none;
    }
    &__row:last-child .inventory__item {
        border-bottom: none;
    }
}
</style>
