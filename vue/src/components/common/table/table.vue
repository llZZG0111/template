<template>
  <div class="table_wrap">
    <el-table :data="tableProp?.data" v-bind="tableProp?.options">
      <template
        v-for="(currentColumn, key) in tableProp?.columns"
        :key="`scopeSlot${key}`"
      >
        <template v-if="currentColumn.slotScope">
          <el-table-column v-bind="currentColumn">
            <template v-slot="{ row, column, $index }">
              <slot
                :name="currentColumn.slotScope"
                :row="row"
                :column="column"
                :index="$index"
              ></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column :key="`scopeSlot${key}`" v-bind="currentColumn">
          </el-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
type IProp = {
  modelValue: object;
} & IFormProp;
const props = withDefaults(defineProps(), {});
</script>

<style lang="scss" scoped></style>
