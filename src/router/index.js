import Vue from 'vue'
import Router from 'vue-router'
import BookIndex from '@/components/Books/Index'
import BookEdit from '@/components/Books/EditBook'
import BookShow from '@/components/Books/ShowBook'
import BookCreate from '@/components/Books/CreateBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book/create',
      name: 'book-create',
      component: BookCreate
    },
    {
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: BookShow
    },
    {
      path: '/books',
      name: 'books',
      component: BookIndex
    },

    

  ]
})
