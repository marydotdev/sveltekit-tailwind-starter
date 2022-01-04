<script>
    import '../app.css';
    import Header from '../components/Header.svelte';

</script>


    <div class="bg-light text-dark dark:bg-dark dark:text-light">
        <Header />
        <main>
            <slot />
        </main>
    </div>
