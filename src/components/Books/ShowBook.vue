<template>
  <div>
    <h1>Show Book</h1>
    <p>id: {{ book.id }}</p>
    <p>title: {{ book.title }}</p>
    <p>author: {{ book.author }}</p>
    <p>total_page: {{ book.total_page }}</p>
    <p>publisher: {{ book.publisher }}</p>
    <p>category: {{ book.category }}</p>
    <p>price: {{ book.price }}</p>
  </div>
</template>
<script>
import BookService from "@/services/BookService";

export default {
  data() {
    return {
      book: null
    };
  },
  async created() {
    let bookId = this.$route.params.bookId;
    this.book = (await BookService.show(bookId)).data
    console.log(this.bookId)
  }
};
</script>
<style scoped></style>
