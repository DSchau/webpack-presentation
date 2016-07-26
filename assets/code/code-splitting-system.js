export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./home')
          .then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};
