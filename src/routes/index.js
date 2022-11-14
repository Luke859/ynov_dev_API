import Router from '@koa/router'
import exempleRoutes from '#components/exemple/exemple-routes.js'
import taskRoutes from '#components/task/task-routes.js'

//Api pour les exemples
const API_V1_ROUTER = new Router({prefix: '/api/v1'})
API_V1_ROUTER.use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())
export { API_V1_ROUTER }

//Api pour les tasks
const API_V2_ROUTER = new Router({prefix: '/api/v2'})
API_V2_ROUTER.use('/tasks', taskRoutes.routes(), taskRoutes.allowedMethods())
export { API_V2_ROUTER }