<script lang="ts">
  import { page } from '$app/stores';

  let currentPath;
  $: currentPath = $page.url.pathname;

  const leftLinks = [
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'other', path: '/other' }
  ];
</script>

<nav>
  <div class="left">
    <ul>
      {#each leftLinks as link}
        <li>
          <a href={link.path}>{link.name}</a><span
            class={link.path === currentPath ? 'active-cursor' : 'inactive-cursor'}>_</span
          >
        </li>
      {/each}
    </ul>
  </div>
  <div class="right">
    <ul>
      <li><a href="/resume.pdf" download="aaron_kim_resume.pdf">resume</a></li>
      <li><a href="https://github.com/aaronkim218" target="_blank">github</a></li>
      <li><a href="https://www.linkedin.com/in/aaron-kim27" target="_blank">linkedin</a></li>
      <li><a href="mailto:218adk@gmail.com">email</a></li>
    </ul>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    padding: 1rem;
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    z-index: 1000;
  }

  nav::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
  }

  ul {
    display: flex;
  }

  li {
    margin: 0 2rem;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .active-cursor {
    font-size: 1.5rem;
    display: inline-block;
    animation: blink 1s steps(1) infinite;
  }

  .inactive-cursor {
    color: transparent;
    font-size: 1.5rem;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
</style>
