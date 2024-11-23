<script>
</script>

<nav class="">
  <div class="left">
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/projects">projects</a></li>
      <li><a href="/other">other</a></li>
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
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  nav::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    transform: translateX(-50%);
    animation: expandBorder 1s ease forwards;
  }

  @keyframes expandBorder {
    to {
      width: 100%;
    }
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
</style>
