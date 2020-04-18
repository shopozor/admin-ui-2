// import something here

// "async" is optional
export default async ({ Vue /* app, router, Vue, ... */ }) => {
  // something to do
  Vue.prototype.$shopozor = {
    adminUI: {
      // this should be automatically generated from the git repo (tags)
      version: '0.1'
    },
    // Should be extracted in a translation file
    deliveryStatusOptions: {
      ORDER_ACCEPTED: 'Order accepted',
      ORDER_DELIVERED: 'Order delivered',
      ORDER_DELIVERY_FAILED: 'Delivery failed',
      ORDER_INVALID: 'Order considered to be invalid',
      ORDER_READY_FOR_DELIVERY: 'Order ready for delivery',
      ORDER_RECEIVED: 'Order received',
      ORDER_REFUSED_BY_CLIENT: 'Delivery refused by client'
    },

    basketTypes: {
      0: '30 CHF',
      1: '60 CHF',
      2: '90 CHF'
    }
  }
}
