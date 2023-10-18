<template>
  <div>
    <h1>Edit Books</h1>
    <h1>Edit Book</h1>
    <form v-on:submit.prevent="editBook">
      <p>title: <input type="text" v-model="book.title" /></p>
      <p>author: <input type="text" v-model="book.author" /></p>
      <p>total_page: <input type="text" v-model="book.total_page" /></p>
      <p>publisher: <input type="text" v-model="book.publisher" /></p>
      <p>category: <input type="text" v-model="book.category" /></p>
      <p>price: <input type="text" v-model="book.price" /></p>
      <p><button type="submit">edit book</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ book.title }}</p>
      <p>author: {{ book.author }}</p>
      <p>total_page: {{ book.total_page }}</p>
      <p>publisher: {{ book.publisher }}</p>
      <p>category: {{ book.category }}</p>
      <p>price: {{ book.price }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import BookService from "@/services/BookService";
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        total_page: "",
        publisher: "",
        category: "",
        price: ""
      }
    };
  },
  methods: {
    async editBook() {
      try {
        await BookService.put(this.book);
        this.$router.push({
          name: "books"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let bookId = this.$route.params.bookId;
      this.book = (await BookService.show(bookId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
