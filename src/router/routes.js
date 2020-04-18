
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'baskets',
        name: 'baskets',
        component: () => import('pages/Baskets.vue'),
        children: [
          {
            path: 'orders',
            name: 'basketOrders',
            component: () => import('components/Orders.vue'),
            children: [
              {
                path: 'list',
                name: 'basketOrdersList',
                component: () => import('components/ListOrders.vue')
              }
            ]
          }

        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
