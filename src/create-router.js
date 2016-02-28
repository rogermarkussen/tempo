import { Router5 } from 'router5'
import history from 'router5-history'

export default function createRouter () {
  const router = new Router5()
    .setOption('useHash', true)
    .setOption('defaultRoute', 'oppsett')
    .addNode('oppsett', '/oppsett')
    .addNode('ritt', '/ritt')
    .addNode('resultater', '/resultater')
    .usePlugin(Router5.loggerPlugin())
    .usePlugin(history())
  return router
}
