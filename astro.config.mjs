import { defineConfig } from 'astro/config';
import myAdapter from '@astrojs/my-adapter';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: myAdapter(),
});
