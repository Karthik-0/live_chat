<script>
	import {collectionData} from 'rxfire/firestore';
	import {startWith} from 'rxjs/operators';
	import {initializeFirebase} from './firebase';
	import { afterUpdate, onDestroy, onMount } from 'svelte'
	import {onVisibilityChange} from './visibility';
	import {isElementVisible} from './utils';
	import Messages from './Messages.svelte';
	import MessageForm from './MessageForm.svelte';
	
	const interval = setInterval(() => updatePageTitle(), 500);
	export let user, config, height, room, width;


	let title = document.title
	let unreadCount = 0;
	const firebase = initializeFirebase(config);
	const db = firebase.firestore();
	const query = db.collection(room).orderBy("sentAt");
	const chats = collectionData(query, "id").pipe(startWith([]));

	afterUpdate(async () => {
		if (!isElementVisible(document.querySelector('.tp-chat'))) {
			unreadCount += 1
		}
	})

	onMount(() => {
		onVisibilityChange(updatePageTitle)
	});

	onDestroy(() => {
		clearInterval(interval)
	});

	const updatePageTitle = () => {
		if (!isElementVisible(document.querySelector('.tp-chat')) & unreadCount > 0) {
			var newTitle = '(' + unreadCount + ') ' + title;
    		document.title = newTitle;
		}
		
		if (isElementVisible(document.querySelector('.tp-chat'))) {
			unreadCount = 0;
			document.title = title
		}
	}

</script>

<main class="p-4 tp-chat" style="height: {height}; width: {width};">
	<Messages user={user} chats={chats} height={height}  />
	<MessageForm db={db} room={room} user={user}/>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>