<script>
    let dark = false;

    if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			dark = true;
		}
	}
    
	function toggleDarkMode() {
		if (dark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			dark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			dark = true;
		}
	}
</script>

<nav>
    <div>
        <button on:click={toggleDarkMode}>
            {#if dark}
            dark
            {:else}
            light
            {/if}
        </button>
    </div>
</nav>