<script>
  import houseWell from '$lib/assets/images/carousel-images/house-well.jpg';
  import houseSunset from '$lib/assets/images/carousel-images/house-sunset.jpg';
  import houseElephant from "$lib/assets/images/carousel-images/house-elephant.jpg";
  import housePond from "$lib/assets/images/carousel-images/house-pond.jpg";
  import houseFish from "$lib/assets/images/carousel-images/house-fish.jpg";
  import houseFoliage from "$lib/assets/images/carousel-images/house-foliage.jpg";
  import houseGarden from "$lib/assets/images/carousel-images/house-garden.jpg";
  import houseOutside from "$lib/assets/images/carousel-images/house-outside.jpg";
  import houseWall from "$lib/assets/images/carousel-images/house-wall.jpg";
</script>

<div
  id="houseCarousel"
  class="carousel slide carousel-fade relative pb-4"
  data-bs-ride="carousel"
>
<!-- create slideshow at the bottom of the carousel users can click through -->
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 pb-4">
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="7"
      aria-label="Slide 8"
    ></button>
    <button
      type="button"
      data-bs-target="#houseCarousel"
      data-bs-slide-to="8"
      aria-label="Slide 9"
    ></button>
  </div>
<!-- set images to be used in carousel -->
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src={houseWell}
        class="block w-full"
        alt="Garden view of the house"
      />
    </div>

    <div class="carousel-item float-left w-full">
      <img
        src={houseSunset}
        class="block w-full"
        alt="Garden view of the house during a sunset"
      />
    </div>

    <div class="carousel-item float-left w-full">
      <img
        src={houseElephant}
        class="block w-full"
        alt="Elephant statue in the garden"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={housePond}
        class="block w-full"
        alt="Garden pond"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={houseFish}
        class="block w-full"
        alt="Fish in pond"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={houseFoliage}
        class="block w-full"
        alt="View of the house through the garden"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={houseGarden}
        class="block w-full"
        alt="View of the garden and stairs"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={houseOutside}
        class="block w-full"
        alt="Exterior of accommodation"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src={houseWall}
        class="block w-full"
        alt="Wall behind the garden"
      />
    </div>
  </div>
<!-- create buttons to navigate between images -->
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#houseCarousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#houseCarousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>