<script>
  // import svelteLogo from './assets/svelte.svg'
  // import Counter from './lib/Counter.svelte'
  let arrayofarticles = [];
  fetch("https://blog.utc.edu/news/wp-json/wp/v2/posts?_embed&per_page=4")
    .then((response) => response.json())
    .then((data) => (arrayofarticles = data));
</script>

<!-- <main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <!-- <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" /> -->
    <!-- </a>
  </div>
  <h1>Vite + Svelte</h1> -->
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {#each arrayofarticles as index}

  <!-- <p>{index.title.rendered}</p>
  <p>{index.link}</p>
  {index.yoast_head_json.og_image[0].url} -->
  <!-- index._embedded.wpfeaturemedia[0].media_details.sizes.thumbnail.source_url -->
    <!-- <p>{index._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}</p> -->
          <div class="bg-white shadow hover:bg-utc-new-blue-100 border-b-4 border-utc-new-gold-500">
            <a href={index.link} class="hover:bg-transparent text-utc-new-blue-500">
              <div class="text-center overflow-hidden">
                <img class="w-full" src=" {index._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}" alt="{index.yoast_head_json.og_title}">
                <div class="px-6 py-4">
                  <div class="font-semibold text-xl text-center mb-2">{index.title.rendered}</div>
                    <!-- <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p> -->
                </div>
              </div>
            </a>
          </div>
    {/each}
  </div>



  <!-- {/each} -->
  <!-- <div class="card">
    <Counter />
  </div> -->

  <!-- <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p> -->
<!-- </main> -->

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
