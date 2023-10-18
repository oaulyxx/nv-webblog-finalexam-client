<template>
  <div>
    <h1>Get All Books</h1>
    <div>จํานวนหนังสือ {{ books.length }}</div>
    <div v-for="book in users" v-bind:key="book.id">
      <div>id: {{ book.id }}</div>
      <div>title: {{ book.title }}</div>
      <div>author: {{ book.author }}</div>
      <div>total_page: {{ book.total_page }}</div>
      <div>publisher: {{ book.publisher }}</div>
      <div>category: {{ book.category }}</div> 
      <div>price: {{ book.price }}</div>
      <p> 
        <button v-on:click="navigateTo('/book/' + book.id)">
          ดูข้อมูลหนังสือ
        </button>
        <button v-on:click="navigateTo('/book/edit/' + book.id)">
          แก้ไขข้อมูล
        </button>
        <button v-on:click="deleteBook(book)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import BookServices from "@/services/BookService";
export default {
  data() {
    return {
      books: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBook(book) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await BookServices.delete(book);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.book = (await BookServices.index()).data;
    }
  },
  async created() {
    this.book = (await BookServices.index()).data;
  }
};
</script>
<style scoped></style>
