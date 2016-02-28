import Router5, { loggerPlugin } from 'router5'
import history from 'router5-history'

export default function createRouter () {
  const router = new Router5()
    .setOption('useHash', false)
    .setOption('defaultRoute', 'oppsett')
    .addNode('oppsett', '/oppsett')
    .addNode('ritt', '/ritt')
    .addNode('resultater', '/resultater')
    .usePlugin(loggerPlugin())
    .usePlugin(history())
  return router
}
