import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  return new Promise((resolve, reject) => {
    // начальное время для последующего расчета
    // предзагрузки данных
    const startTime = isDev && Date.now()

    const { app, router, store } = createApp()

    const { url } = context
    const { fullPath } = router.resolve(url).route

    // url не совпадет
    if (fullPath !== url) {
      /* eslint-disable-next-line */
      return reject({ url: fullPath })
    }
    // установка маршрута роута
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // нет совпадения по роуту
      if (!matchedComponents.length) {
        /* eslint-disable-next-line */
        return reject({ code: 404 })
      }
      // если есть асинхронные вызовы дожидаемся их разрешения
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        // расчет времени для предзагрузки данных
        isDev && console.log(`data pre-fetch: ${Date.now() - startTime}ms`)
        // После разрешения всех асинхронных вызовов, наше хранилище теперь
        // заполнено состоянием, необходимым для рендеринга приложения.
        // Когда мы присоединяем состояние к контексту, и есть опция `template`
        // используемая для рендерера, состояние будет автоматически
        // сериализовано и внедрено в HTML как `window.__INITIAL_STATE__`.
        context.meta = app.$meta()
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
