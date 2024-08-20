<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <VueDraggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
        item-key="id"
        :sort="false"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </VueDraggable>
    </el-col>

    <el-col :span="16">
      <VueDraggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </VueDraggable>
    </el-col>
    <el-col :span="4">11</el-col>
  </el-row>
</template>
<script setup lang="ts">
const list1 = reactive([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 },
]);

const list2 = reactive([
  { name: 'Juan', id: 5 },
  { name: 'Edgard', id: 6 },
  { name: 'Johnson', id: 7 },
]);

const log = (evt) => {
  console.log(evt);
};

//拖拽开始的事件
const onStart = () => {
  console.log('开始拖拽');
};

//拖拽结束的事件
const onEnd = () => {
  console.log('结束拖拽');
};
</script>
<style scoped>
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 270px;
  padding-left: 20px;
}
.item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
}

.item:hover {
  cursor: move;
}
.item + .item {
  margin-top: 10px;
}
/* .ghost {
  border: solid 1px rgb(19, 41, 239);
} */
.chosenClass {
  background-color: #f1f1f1;
}
</style>
