import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_9KxlBWe2.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/accessdenied.astro.mjs');
const _page3 = () => import('./pages/auth/login.astro.mjs');
const _page4 = () => import('./pages/equipo/equipos.astro.mjs');
const _page5 = () => import('./pages/equipo/jugadores/analisis-video.astro.mjs');
const _page6 = () => import('./pages/equipo/jugadores/estadisticas.astro.mjs');
const _page7 = () => import('./pages/equipo/jugadores/jugador/heatmap/_heatmap_.astro.mjs');
const _page8 = () => import('./pages/equipo/jugadores/jugador/_id_.astro.mjs');
const _page9 = () => import('./pages/equipo/jugadores/registrar-jugador.astro.mjs');
const _page10 = () => import('./pages/equipo/_team_.astro.mjs');
const _page11 = () => import('./pages/notfound.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/AccessDenied.astro", _page2],
    ["src/pages/auth/login.astro", _page3],
    ["src/pages/equipo/equipos.astro", _page4],
    ["src/pages/equipo/jugadores/analisis-video.astro", _page5],
    ["src/pages/equipo/jugadores/estadisticas.astro", _page6],
    ["src/pages/equipo/jugadores/jugador/heatmap/[heatmap].astro", _page7],
    ["src/pages/equipo/jugadores/jugador/[id].astro", _page8],
    ["src/pages/equipo/jugadores/registrar-jugador.astro", _page9],
    ["src/pages/equipo/[team].astro", _page10],
    ["src/pages/NotFound.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f0ce4ef5-280c-4537-bf0a-043e59a2271f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
