export default {
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String },
    fill: { default: 'var(--blue)', type: String },
    width: { default: '100%', type: String },
    height: { default: '', type: String }
  },
  template: `
  <div
    style="
      border-radius: var(--border-radius);
      padding: calc(var(--base) * 1);
      margin-bottom: 1.5rem;
      color: var(--white);
      display: flex;
      justify-content: space-between;
    "
    :style="{
      background: fill,
      width,
      height
    }"
  >
    <h5 style="margin: 0; font-size: calc(var(--base) * 1.75);" v-html="title">{{}}</h5>
    <p><small>{{ subtitle }}</small></p>
  `
}