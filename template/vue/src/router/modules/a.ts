export default [
  {
    path: '/a',
    name: 'a',
    meta: {
      name: '这是title',
    },
    component: () => import('@/views/a/a.vue'),
  },
];
