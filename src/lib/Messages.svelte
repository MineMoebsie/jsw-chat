<script>
  import { messages } from './stores.js';
  import { isToday, isYesterday, format } from 'date-fns';

  const getTime = d => {
    const dd = new Date(d);
    return `${isToday(dd) ? "Today" : isYesterday(dd) ? "Yesterday" : format(dd,"dd MMM")}, ${format(dd, "hh:mm a")}`
  }

  const chainTop = (msg, i) => i === 0 ? $messages[i + 1].id === msg.id : $messages[i + 1] !== undefined ? $messages[i + 1].id === msg.id : false; // Is it message the top message of chain.
  const chainMsg = (msg, i) => i === 0 ? false : $messages[i - 1].id === msg.id; // Is it message a chained message.
  const chainBottom = (msg, i) => $messages.length === i + 1 || $messages[i + 1].id !== msg.id; // Is it the bottom chained message.
	
</script> 

<ul class="grow">
	{#each $messages as msg, i}
    {#if !chainMsg(msg,i)}
      <div class="bg-white dark:bg-gray-700 flex mx-3 mt-3 py-2 px-3 rounded-lg shadow-lg  w-fit max-w-full" class:rounded-b-none={chainTop(msg,i)} >
        <div class="flex justify-center items-center flex-shrink-0" class:invisible={chainMsg(msg,i)}>
          <img src={msg.a} alt="avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div class="ml-3 flex justify-center flex-col">
          <div>
            <span class="dark:text-white">{msg.u}</span>
            <span class="text-xs text-gray-600 dark:text-gray-400 ml-1">{getTime(msg.t)}</span>
          </div>
          <div class="dark:text-white break-all">
            {@html msg.m}
          </div>
        </div>
      </div>
    {:else}
      <div class="bg-white dark:bg-gray-700 mx-3 px-3 pb-2 shadow-lg w-fit max-w-full flex" class:rounded-b-lg={chainBottom(msg,i)}>
        <div class="flex-shrink-0 w-10 h-8">&nbsp;</div>
        <span class="ml-3 dark:text-white break-all">{@html msg.m}</span>
      </div>
    {/if}
  {/each}

</ul>

