<h3 class="book-card__title">
 <RouterLink :to="{ name: 'book', params: { id: book.id } }">
 {{ book.title }}
 </RouterLink>
</h3>