import { onMounted, onUnmounted } from 'vue'

export function useSeoMeta({ title, description, canonical }) {
  const defaultTitle = 'R.S. Thomas Hauling, Inc. | Powhatan, VA'

  onMounted(() => {
    document.title = title || defaultTitle

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('data-original', meta.getAttribute('content'))
        meta.setAttribute('content', description)
      }
    }

    if (canonical) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = canonical
      link.id = 'page-canonical'
      document.head.appendChild(link)
    }
  })

  onUnmounted(() => {
    document.title = defaultTitle

    const meta = document.querySelector('meta[name="description"]')
    if (meta && meta.getAttribute('data-original')) {
      meta.setAttribute('content', meta.getAttribute('data-original'))
      meta.removeAttribute('data-original')
    }

    const canonical = document.getElementById('page-canonical')
    if (canonical) canonical.remove()
  })
}
