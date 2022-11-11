# This is the graveyard of old code
Treat all the code below with respect, as they always served us when we needed it the most. They did not let us down a single time. Rest in peace, old code. You will not be forgotten. 
## The msg element (came into being by MineMoebsie). 
Only lived for 1 day. Served as chat with extra functionality for the so-called 'chained-messages'.

```
import { fade } from 'svelte/transition'
var showDate = -1;
var lastMessageU = -1;


<ul class="grow p-4">
  {#each $messages as message, i}
    {#if Object.values($messages)[Math.max(i-1,0)].u === message.u && i !== 0} <!-- chained message -->
      <li on:mouseover="{() => showDate = message}" on:mouseleave="{() => showDate = -1}"> 
        <div class="avatar">
          <div class="w-8 h-8 ml-2 float-left mr-3">
            <img class="float-left rounded-full mr-3" src="/default-profile-picture.png" alt="{message.u}" />
          </div> 
          <p class="inline-block text-white">{@html message.m}</p>
          {#if showDate === message} <!-- misschien niet voor de tijd maar dan voor iets anders? bijv reply button? -->
            <p transition:fade="{{duration: 50}}" class="text-slate-500 inline-block">{getDate(message)}</p>
          {/if}
        </div>
      </li>
    {:else} <!-- new message, different user-->
      <li on:mouseover="{() => showDate = message}" on:mouseleave="{() => showDate = -1}"> 
        <div class="avatar">
          <div class="w-8 ml-2">
            <img class="float-left rounded-full mr-3" src="/default-profile-picture.png" alt="{message.u}" />
          </div>
          <p class="text-white inline-block"><strong>{message.u}</strong></p> 
          {#if showDate === message} <!-- misschien niet voor de tijd maar dan voor iets anders? bijv reply button? -->
            <p transition:fade="{{duration: 50}}" class="text-slate-500 inline-block">{getDate(message)}</p>
          {/if}
          <p class="text-white">{@html message.m}</p>
        </div>
      </li>
    {/if}
  {/each}  
</ul>
```
