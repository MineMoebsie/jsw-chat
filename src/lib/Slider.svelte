<script>
  export let checked = false
  const id = Date.now().toString();
</script>

<label for={id} class="flex items-center cursor-pointer">
  <div class="relative">
    <input type="checkbox" id={id} class="sr-only slider peer outline-none" {checked}>
    <div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div> 
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition peer-checked:translate-x-full peer-checked:bg-green-300 dark:peer-checked:bg-green-600"></div>
  </div>
</label>
