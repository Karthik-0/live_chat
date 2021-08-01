<script>
    export let db, room, user;
    let message = "";

    function sendMessage() {
		if (!message) return;

		db.collection(room).add({
			uid: user.id,
			message: message,
			sentAt: +new Date(),
			name: user.name
		})
		message = "";
	}
</script>
<main>
    <div class="flex w-full mt-5">
		<textarea bind:value="{message}" rows="3" class="p-2 max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>

		<button on:click="{sendMessage}">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="110.86292" y1="145.13708" x2="156.11775" y2="99.88225" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
		</button>
	</div>
</main>