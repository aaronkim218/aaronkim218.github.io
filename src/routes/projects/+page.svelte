<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import type { Project } from '../../types';
  import Icon from '@iconify/svelte';
  import { fade } from 'svelte/transition';

  let projects: Project[] = [
    {
      title: 'platnm',
      description: 'generate project',
      path: '/platnm',
      date: '9/24 - Present'
    },
    {
      title: 'clichat',
      description: 'personal project',
      path: '/clichat',
      date: '7/24 - Present'
    },
    {
      title: 'tubender',
      description: 'generate project',
      path: '/tubender',
      date: '1/24 - 4/24'
    },
    {
      title: 'voxeti',
      description: 'generate project',
      path: '/voxeti',
      date: '9/23 - 12/23'
    },
    {
      title: 'begroovy',
      description: 'personal project',
      path: '/begroovy',
      date: '11/23 - 12/23'
    },
    {
      title: 'geo task',
      description: 'personal project',
      path: '/voxeti',
      date: '8/24 - Present'
    },
    {
      title: 'init',
      description: 'generate project',
      path: '/init',
      date: '5/24 - 6/24'
    }
  ];

  let i = 0;
</script>

<div class="content">
  <div class="carousel-container">
    <button
      class="carousel-button"
      on:click={() => (i === 0 ? (i = projects.length - 1) : (i -= 1))}
    >
      <Icon font-size={50} icon="radix-icons:double-arrow-left" />
    </button>
    <div class="project-container">
      {#key i}
        <div in:fade={{ duration: 1000 }}>
          <ProjectCard project={projects[i]} />
        </div>
      {/key}
    </div>
    <button class="carousel-button" on:click={() => (i = (i + 1) % projects.length)}>
      <Icon font-size={50} icon="radix-icons:double-arrow-right" />
    </button>
  </div>
  <div class="carousel-dots-container">
    {#each projects.keys() as j}
      <button class="carousel-dot-button" on:click={() => (i = j)}>
        <Icon
          font-size={50}
          color="#1bb21b"
          icon={j === i ? 'radix-icons:dot-filled' : 'radix-icons:dot'}
        />
      </button>
    {/each}
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    height: 80vh;
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-dots-container {
    display: flex;
    justify-content: center;
  }

  .project-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .carousel-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--primary-color);
    transition: opacity 0.3s ease;
    transition: transform 0.1s ease;
  }

  .carousel-dot-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.3s ease;
    transition: transform 0.1s ease;
  }

  .carousel-button:hover {
    opacity: 0.75;
    transform: scale(1.1);
  }

  .carousel-dot-button:hover {
    opacity: 0.75;
    transform: scale(1.1);
  }
</style>
