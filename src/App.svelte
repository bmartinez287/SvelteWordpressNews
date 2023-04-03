<script>
  let arrayofarticles = [];
  fetch(window.utcitsveltewordpress.url, {
    method: "PUT",
  })
    .then((response) => response.json())
    .then((data) => (arrayofarticles = data));
</script>

{#if arrayofarticles.length === 0}
  <!-- ...Loading -->
  <div class="utcwpsloadingcontainer">
    <div id="utcwpsloading" />
  </div>
  <!-- {:else}
    {arrayofarticles} -->
{/if}




{#if window.utcitsveltewordpress.image}

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{#each arrayofarticles as index}
      <div class="bg-white shadow hover:bg-utc-new-blue-100 border-b-4 border-utc-new-gold-500">
        <a href={index.link} class="hover:bg-transparent text-utc-new-blue-500">
          <div class="text-center overflow-hidden">
            {#if index._embedded["wp:featuredmedia"] !== undefined}
              <img class="w-full" src=" {index._embedded['wp:featuredmedia'][0].media_details.sizes
              ['featured-blog'].source_url}"
              alt={index.yoast_head_json.og_title}
              />
            {/if}
            {#if index._embedded["wp:featuredmedia"] === undefined}
              <img
                class="w-full"
                src="https://i0.wp.com/blog.utc.edu/news/files/2022/08/Founders-21-1736.jpg?zoom=2&resize=475%2C400&ssl=1"
                alt={index.yoast_head_json.og_title}
              />
            {/if}
            <div class="px-6 py-4">
              <div class="font-semibold text-xl text-center mb-2">
                {@html index.title.rendered}
              </div>
            </div>
          </div>
        </a>
      </div>
{/each}
</div>
{:else}
<div class="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-2 ml-2">
{#each arrayofarticles as index}
<div>
  <!-- {index.id(index.categories[0]).name}  -->
  <a href={index.link} class="text-utc-new-blue-500">
    <div class="pr-4 my-4 hover:bg-utc-new-blue-100">
    <div class="border-l-4 border-utc-new-gold-500 py-1">
        <div class="text-base my-1 uppercase font-bold tracking-wide pl-3">
          {#if index._embedded['wp:term'][0][0].id === index.categories[0]}
          {@html index._embedded['wp:term'][0][0].name}
          {/if}
        </div>
      <div class="text-lg mb-1 pl-3">{@html index.title.rendered}</div>
      </div>
      <!-- {# <p> {{content.news_pubdate}} </p> #} -->
    </div>
  </a>
</div>

{/each}
</div>
{/if}


<style>
  /* creating css loader */
  .utcwpsloadingcontainer {
    display: flex;
    height: 32rem;
  }
  #utcwpsloading {
    width: 2rem;
    height: 2rem;
    border: 5px solid #f3f3f3;
    border-top: 6px solid #9c41f2;
    border-radius: 100%;
    margin: auto;
    visibility: initial;
    /* visibility: hidden; */
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
