<template>
  <div>
    <div class="bg-primary px-4 lg:px-52">
      <div class="flex space-x-2 py-6 px-4 lg:px-52 fixed bg-primary top-0 left-0 right-0">
        <div class="flex-1 font-bold justify-items-stretch">
          DASHBOARD
        </div>
        <div class="flex-2 space-x-4">
          <span /><button>About</button>
          <span /><button>Contact Us</button>
          <span /><button>Login</button>
        </div>
      </div>
      <div class="px-auto  pt-14 mt-16 mb-14">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 pb-8">
          <div class="space-y-10">
            <div class="text-4xl font-black text-color2">
              Welcome to Boki n Anene
            </div>
            <div class="font-semibold text-lg">
              Kiribati Protestant Hymn Book digital version of the "Boki n Anene"
              book that contains 314 hymns
            </div>
            <div class="space-y-4">
              <div>Download Boki n Anene to have your hymns in your phone</div>
              <button class="p-3 bg-button rounded-md shadow-md text-white">
                GET OUT APP
              </button>
            </div>
          </div>
          <div class="">
            <img
              src="/images/bokinanene.png"
              alt=""
              srcset=""
            >
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 lg:px-52 space-y-8 text-lg">
      <div>
        Boki n Anene is an app version of the Kiribati Protestant Church Hymn Book
        since its first published in 1975, it has been used as a Hymn and Tune Book
        in Kiribati and by Kiribati people around the world.
        This app provides the
        functionality of searching hymn by hymn number or keyword
        that makes searching for hymn super easy and fast.
      </div>
      <div class="flex flex-col space-y-8 items-center justify-center">
        <div class="font-bold text-2xl text-secondary text-center">
          Features
        </div>
        <div class="grid grid-cols-3 space-x-10 ">
          <div class="flex flex-col text-center space-y-4 items-center justify-center">
            <div class="rounded-full bg-primary h-24 w-24 flex items-center justify-center">
              Circle
            </div>
            <div>Contains 314 Hymns</div>
          </div>
          <div class="flex flex-col text-center space-y-4 items-center justify-center">
            <div class="rounded-full bg-primary h-24 w-24 flex items-center justify-center">
              Circle
            </div>
            <div>Search by Hymn Number</div>
          </div>
          <div class="flex flex-col text-center space-y-4 items-center justify-center">
            <div class="rounded-full bg-primary h-24 w-24 flex items-center justify-center" />

            <div>Add to Favourites</div>
          </div>
        </div>
      </div>
      <div class="space-y-16 pt-8">
        <div class="text-center space-y-2">
          <div class="font-extrabold text-2xl text-secondary text-center">
            Contact Us
          </div>
          <div>Get in touch with us now</div>
        </div>
        <div class="flex flex-col space-y-4 items-center justify-center">
          <input
            class="border rounded-md p-2 w-2/5"
            placeholder="Name"
            type="text"
          >
          <input
            class="border rounded-md p-2 w-2/5"
            placeholder="Email"
            type="text"
          >
          <textarea
            class="border rounded-md p-2 w-2/5"
            placeholder="Message"
            rows="10"
            type="text"
          />
          <button class="bg-primary text-white px-4 py-2 rounded text-center border border-color2">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
