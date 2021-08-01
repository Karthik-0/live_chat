<script>
    import Time from "svelte-time";

    export let chat, currentUser;
</script>
<main class="my-4">
    <div class="{currentUser ? 'items-end flex-row-reverse': ''} flex">
        <h4 class="font-medium text-sm">{chat.name} </h4>
        <span class="mx-2 text-gray-500 text-xs my-auto">
            <Time relative timestamp={chat.sentAt} />
        </span>
    </div>
    <div class="{currentUser ? 'items-end flex-row-reverse': ''} mt-0.5 flex ">
        <div class="{currentUser ? 'bg-gray-600  text-white': 'bg-gray-200 text-gray-900'} flex max-w-max px-4 py-1 rounded">
            {chat.message}
        </div>
       
    </div>
</main>