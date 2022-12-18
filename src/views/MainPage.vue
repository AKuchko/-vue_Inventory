<template>
    <div class="main-wrapper">
        <baseSidebarVue class="main-wrapper__item"></baseSidebarVue>
        <baseInventoryVue class="main-wrapper__item"></baseInventoryVue>
    </div>
</template>

<script>
import baseSidebarVue from '@/components/base-sidebar.vue'
import baseInventoryVue from '@/components/base-inventory.vue'

export default {
  name: 'MainPage',
  components: { baseSidebarVue, baseInventoryVue }
}
</script>

<style lang="scss">
    .main-wrapper {
        display: flex;
        max-width: 768px;
        margin: auto;

        &__item:not(:first-child) {
            margin-left: 20px;
        }
    }
</style>
