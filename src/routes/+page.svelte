<script lang="ts">
  import { onMount } from 'svelte';

  let active = 0;

  const messages = [
    {
      speed: 500,
      text: 'hi',
      displayText: '',
      timeout: 1000
    },
    {
      speed: 1500,
      text: 'my name is aaron kim',
      displayText: '',
      timeout: 1000
    },
    {
      speed: 1500,
      text: 'welcome to my portfolio',
      displayText: '',
      timeout: 0
    }
  ];

  function typeWriter(messageIndex: number) {
    let i = 0;
    const message = messages[messageIndex];
    const text = message.text;
    const typingSpeed = message.speed / text.length;

    const interval = setInterval(() => {
      if (i < text.length) {
        messages[messageIndex].displayText += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (messageIndex < messages.length - 1) {
            active++;
            typeWriter(active);
          }
        }, message.timeout);
      }
    }, typingSpeed);
  }

  onMount(() => {
    typeWriter(active);
  });
</script>

<div class="container">
  {#each messages as message, index}
    <div class="message-container">
      <h1>{message.displayText}</h1>
      <span class={index === active ? 'active-cursor' : 'inactive-cursor'}>_</span>
    </div>
  {/each}
</div>

<style>
  h1 {
    font-size: 3rem;
  }

  .message-container {
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .active-cursor {
    font-size: 3rem;
    display: inline-block;
    animation: blink 1s steps(1) infinite;
  }

  .inactive-cursor {
    display: none;
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
