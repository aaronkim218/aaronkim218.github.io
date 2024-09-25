<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import type { Project } from '../../types';

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
</script>

<div class="content">
  <div class="projects-container">
    {#each projects as project}
      <div class="project-container">
        <ProjectCard {project} />
      </div>
    {/each}
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    .projects-container {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 10vh;
      padding-right: 10vh;
    }
  }

  .project-container {
    display: flex;
    justify-content: center;
  }
</style>
