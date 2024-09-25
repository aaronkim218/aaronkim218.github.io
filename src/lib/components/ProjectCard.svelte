<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Project } from '../../types';

  export let project: Project;

  function handleClick() {
    goto(`/projects${project.path}`);
  }
</script>

<button class="container" on:click={handleClick}>
  <div class="content">
    <div class="header">
      <div class="title">{project.title}</div>
      <div class="date">{project.date}</div>
    </div>
    <hr />
    <div class="description">{project.description}</div>
  </div>
</button>

<style>
  .container {
    display: flex;
    padding: 1rem;
    border: none;
    /* border-radius: 10px; */
    cursor: pointer;
    width: 50vw;
    height: 30vh;
    font-family: inherit;
    margin: 1rem;
    background-color: var(--secondary-color);
    transition: opacity 0.3s ease;
    /* box-shadow: 0 0 10px var(--primary-color); */
    /* box-shadow: 0 0 10px rgb(255, 0, 234); */
    /* border: 10px solid rgba(255, 255, 255, 1); */
  }

  .container:hover {
    opacity: 0.75;
  }

  @media (min-width: 1200px) {
    .container {
      width: 30vw;
      height: 25vh;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-grow: 1;
    font-family: inherit;
    color: var(--background-color);
  }

  hr {
    width: 100%;
    border: 1px solid var(--background-color);
  }

  .header {
    display: flex;
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .title {
    display: flex;
    font-size: 1.5rem;
    flex-grow: 1;
    justify-content: start;
  }

  .date {
    display: flex;
    font-size: 1.5rem;
    flex-grow: 1;
    justify-content: end;
  }

  .description {
    font-size: 1rem;
    text-align: start;
  }
</style>
