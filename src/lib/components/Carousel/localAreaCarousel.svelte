<script>
  import localAbandonedBoat from "$lib/assets/images/carousel-images/local-abandoned-boat.jpg";
  import localBuildings from "$lib/assets/images/carousel-images/local-buildings.jpg";
  import localBoatFerry from "$lib/assets/images/carousel-images/local-boat-ferry.jpg";
  import localSea from "$lib/assets/images/carousel-images/local-sea.jpg";
  import localBoats from "$lib/assets/images/carousel-images/local-boats.jpg";
  import localPier from "$lib/assets/images/carousel-images/local-pier.jpg";
  import localWalls from "$lib/assets/images/carousel-images/local-walls.jpg";
</script>

<div
  id="localAreaCarousel"
  class="carousel slide carousel-fade relative pb-4"
  data-bs-ride="carousel"
>
<!-- create slideshow at the bottom of the carousel users can click through -->
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 pb-4">
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
    <button
      type="button"
      data-bs-target="#localAreaCarousel"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>
  </div>
<!-- set images to be used in carousel -->
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src={localAbandonedBoat}
        class="block w-full"
        alt="New and old boats on the beach"
      />
    </div>

    <div class="carousel-item float-left w-full">
      <img
        src={localBuildings}
        class="block w-full"
        alt="Buildings in Deal"
      />
    </div>

    <div class="carousel-item float-left w-full">
      <img
        src={localBoatFerry}
        class="block w-full"
        alt="New boat and passing ferry"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={localSea}
        class="block w-full"
        alt="Sea view of Deal"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={localBoats}
        class="block w-full"
        alt="Fishing boats"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={localPier}
        class="block w-full"
        alt="Deal pier"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={localWalls}
        class="block w-full"
        alt="Walls around Deal"
      />
    </div>
  </div>
<!-- create buttons to navigate between images -->
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#localAreaCarousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#localAreaCarousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>