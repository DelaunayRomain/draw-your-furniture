<template>
  <svg
    id="eq53QDfC4uU1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1920 1080"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <rect
      width="1341.658108"
      height="1098.752751"
      rx="0"
      ry="0"
      transform="translate(0-9.376375)"
      :fill="color"
      stroke-width="0"
    />
    <polygon
      points="0,-873.194046 830.456888,-269.8318 513.250583,706.428823 -513.250583,706.428823 -830.456888,-269.8318 0,-873.194046"
      transform="matrix(1 0 0 1.108793 830.456888 296.716666)"
      :fill="color"
      stroke-width="0"
    />
    <rect
      fill="none"
      :stroke="addColor ? 'black' : 'none'"
      stroke-width="100"
      width="100%"
      height="100%"
    />
  </svg>
</template>

<script>
export default {
  props: ["color", "addColor"],
};
</script>

<style></style>
