<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '@iconify/svelte';
</script>

<button class="back-button" on:click={() => goto('/projects')}>
  <Icon font-size={50} color={'#1bb21b'} icon="radix-icons:arrow-left" />
</button>

<style>
  .back-button {
    border: none;
    cursor: pointer;
    background: transparent;
  }
</style>
