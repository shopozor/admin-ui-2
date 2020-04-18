// import something here

// "async" is optional
export default async ({ Vue /* app, router, Vue, ... */ }) => {
  // something to do
  Vue.prototype.$shopozor = {
    // this should be automatically generated from the git repo (tags)
    adminUI: {
      version: '0.1'
    }
  }
}
