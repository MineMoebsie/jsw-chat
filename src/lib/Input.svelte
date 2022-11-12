<script>
 import { messages } from './stores' 

  let value = "";
  const send = () => {
    const msg =  {m:value,u:"User",t:new Date(),a:"/default-profile-picture.png", id:"test"}
    messages.update(v => [...v, msg ])
    value = ""
  };

  messages.subscribe(v => console.log(v))
</script>

<div class="w-full p-2">
  <div class="flex rounded-lg shadow-xl">
    <form class="inline grow flex" on:submit|preventDefault={send}>
      <input placeholder="Message…" class="p-2 w-full rounded-l-lg dark:bg-slate-700 dark:text-white outline-none border-blue-500 border-2 border-hidden focus:border-r-0 focus:border-blue-500 focus:border-solid peer sm:focus:border-l-2 sm:rounded-l-lg" bind:value={value} on:submit={send}/>
      <button type="submit" class="px-3 rounded-r-lg bg-white dark:bg-slate-700 peer-focus:border-y-2 peer-focus:border-r-2 border-blue-500" on:click={send}>
        <i class="fa-solid fa-paper-plane dark:text-white"/>
      </button>
    </form>
  </div>
</div>