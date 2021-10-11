import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65123872 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _51558e90 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _66db0c40 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _1da24191 = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _0778057a = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _b19cc38a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _65123872,
    name: "cart"
  }, {
    path: "/detail",
    component: _51558e90,
    name: "detail"
  }, {
    path: "/main",
    component: _66db0c40,
    name: "main"
  }, {
    path: "/sample",
    component: _1da24191,
    name: "sample"
  }, {
    path: "/product/:id?",
    component: _0778057a,
    name: "product-id"
  }, {
    path: "/",
    component: _b19cc38a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
