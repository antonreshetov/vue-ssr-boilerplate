import { createApp } from './app'

const { app, router, store } = createApp()

// Если есть встроенное состояние приложение, то заменяем текущее в store
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  // Добавляем хук маршрута для обработки asyncData.
  // Выполняем его после разрешения первоначального маршрута,
  // чтобы дважды не загружать данные, которые у нас уже есть.
  // Используем `router.beforeResolve()`,
  // чтобы все асинхронные компоненты были разрешены.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // мы заботимся только об отсутствующих ранее компонентах,
    // поэтому мы сравниваем два списка, пока не найдём отличия
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }

    // здесь мы должны вызвать индикатор загрузки, если используем его

    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {
      // останавливаем индикатор загрузки
      next()
    }).catch(next)
  })

  app.$mount('#app')
})
