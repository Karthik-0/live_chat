<script>
    import { afterUpdate, onDestroy, onMount } from 'svelte'
    import Message from './Message.svelte';
	export let user, height, chats, calculateUnreadCount;

    afterUpdate(async () => {
        calculateUnreadCount();
		updateScroll();
	})

	function updateScroll() {
		const chatWindow = document.querySelector('.messages');
		chatWindow.scrollTop = chatWindow.scrollHeight;   
	}
</script>

<main> 
    <div class="messages overflow-y-auto pr-2" style="height: calc({height} - 120px)">
		{#each $chats as chat}
			<Message chat={chat} currentUser={user.id == chat.uid}/>
		{/each}
	</div>
</main>

<style>
  .messages::-webkit-scrollbar {
    width: 4px;
    background: #fff;
  }

  .messages::-webkit-scrollbar-thumb {
    width: 4px;
    background: #888;
  }
</style>
