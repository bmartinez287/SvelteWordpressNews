<script>
  let arrayofarticles = [];
  fetch(document.utcitsveltewordpress.url, {
    method: "PUT",
  })
    .then((response) => response.json())
    .then((data) => (arrayofarticles = data));
</script>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {#each arrayofarticles as index}
    <div
      class="bg-white shadow hover:bg-utc-new-blue-100 border-b-4 border-utc-new-gold-500"
    >
      <a href={index.link} class="hover:bg-transparent text-utc-new-blue-500">
        <div class="text-center overflow-hidden">
          {#if index._embedded["wp:featuredmedia"] !== undefined}
            <img
              class="w-full"
              src=" {index._embedded['wp:featuredmedia'][0].media_details.sizes[
                'featured-blog'
              ].source_url}"
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
            <!-- <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p> -->
          </div>
        </div>
      </a>
    </div>
  {/each}
</div>

<style>
</style>
