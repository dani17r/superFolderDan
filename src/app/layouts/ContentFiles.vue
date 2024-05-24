<template>
  <div
    class="border-accent tw-m-4 tw-w-[100%] tw-min-h-[80vh]"
    id="content-folder"
    tabindex="-1"
  >
    <q-scroll-area class="tw-h-[80vh] tw-max-w-[100vw]">
      <div
        class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 md:tw-grid-cols-3 lg:tw-grid-cols-6 lg:tw-grid-cols-6 tw-gap-2 tw-my-5 tw-mx-1"
      >
        <slot></slot>
      </div>
    </q-scroll-area>
  </div>
</template>

<style>
#content-folder:focus {
  outline: none;
}
</style>
