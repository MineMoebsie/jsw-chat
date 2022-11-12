<script>
  import { options } from './stores'
  import { onMount } from 'svelte'
  import { cubicOut, cubicIn } from 'svelte/easing'
  import { fly } from 'svelte/transition'
  import Slider from './Slider.svelte'

  let tOptions = {...$options};

  const apply = () => {
    $options.settingsPopup.v = false;
    $options = {...tOptions};
  };
	const close = () => {
		$options.settingsPopup.v = false;
    tOptions = $options;
	}
</script>
<!-- tailwindcss at its finest elegancy and readibility -->
{#if $options.settingsPopup.v}
	<div class="absolute left-0 bottom-0 lg:left-2/3 lg:bottom-0 w-full min-h-1/2 max-h-4/6 lg:h-full lg:min-w-fit lg:w-1/3 flex flex-col bg-white dark:bg-gray-900 dark:text-white border-b-4 border-blue-400 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-3" 
		in:fly="{{ x: -200, duration: 2000, easing: cubicIn }}" out:fly="{{ x: 200, duration: 2000, easing: cubicOut }}" class:hidden={!$options.settingsPopup.v}>
		<!-- class:hidden={!$options.settingsPopup.v} -->
		<h3 class="text-3xl text-center pb-3">Settings</h3>
		<hr class="dark:border-gray-500 border-gray-300"/>
		<div class="grow touch-pan-y">
			{#each Object.keys(tOptions) as i}
        {#if tOptions[i].t !== "none"}
          <div class="border-4 border-gray-300 dark:border-gray-700 w-full p-4 rounded-lg first:mt-2 mb-2 flex shadow-lg hover:bg-slate-200 dark:hover:bg-gray-800">
            <span class="grow text-xl font-semibold align-middle">{tOptions[i].n}</span>
            {#if tOptions[i].t === "slider"}
              <Slider bind:checked={tOptions[i].v}/>
            {/if}
          </div>
        {/if}
			{/each}
		</div>
		<hr class="dark:border-gray-500 border-gray-300"/>
		<div class="w-full flex flex-row-reverse p-2">
			<button class="border border-blue-400 bg-blue-400 rounded py-1 px-2 mx-1 text-white" on:click={apply}>Apply</button>
			<button class="border border-gray-400 bg-gray-400 rounded py-1 px-2 mx-1 text-white" on:click={close}>Close</button>
		</div>
	</div>
{/if}