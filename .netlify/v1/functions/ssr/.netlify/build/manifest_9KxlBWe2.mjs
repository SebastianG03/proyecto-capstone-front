import { J as NOOP_MIDDLEWARE_HEADER, K as decodeKey } from './chunks/astro/server_C7cvheQj.mjs';
import './chunks/index_BNjlPf_e.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/","cacheDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/node_modules/.astro/","outDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/dist/","srcDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/","publicDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/public/","buildClientDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/dist/","buildServerDir":"file:///C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"AccessDenied/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/accessdenied","isIndex":false,"type":"page","pattern":"^\\/AccessDenied\\/?$","segments":[[{"content":"AccessDenied","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/AccessDenied.astro","pathname":"/AccessDenied","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"auth/login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/login","isIndex":false,"type":"page","pattern":"^\\/auth\\/login\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/login.astro","pathname":"/auth/login","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"equipo/equipos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipo/equipos","isIndex":false,"type":"page","pattern":"^\\/equipo\\/equipos\\/?$","segments":[[{"content":"equipo","dynamic":false,"spread":false}],[{"content":"equipos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipo/equipos.astro","pathname":"/equipo/equipos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"equipo/jugadores/analisis-video/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipo/jugadores/analisis-video","isIndex":false,"type":"page","pattern":"^\\/equipo\\/jugadores\\/analisis-video\\/?$","segments":[[{"content":"equipo","dynamic":false,"spread":false}],[{"content":"jugadores","dynamic":false,"spread":false}],[{"content":"analisis-video","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipo/jugadores/analisis-video.astro","pathname":"/equipo/jugadores/analisis-video","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"equipo/jugadores/estadisticas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipo/jugadores/estadisticas","isIndex":false,"type":"page","pattern":"^\\/equipo\\/jugadores\\/estadisticas\\/?$","segments":[[{"content":"equipo","dynamic":false,"spread":false}],[{"content":"jugadores","dynamic":false,"spread":false}],[{"content":"estadisticas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipo/jugadores/estadisticas.astro","pathname":"/equipo/jugadores/estadisticas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"equipo/jugadores/registrar-jugador/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipo/jugadores/registrar-jugador","isIndex":false,"type":"page","pattern":"^\\/equipo\\/jugadores\\/registrar-jugador\\/?$","segments":[[{"content":"equipo","dynamic":false,"spread":false}],[{"content":"jugadores","dynamic":false,"spread":false}],[{"content":"registrar-jugador","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipo/jugadores/registrar-jugador.astro","pathname":"/equipo/jugadores/registrar-jugador","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"NotFound/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notfound","isIndex":false,"type":"page","pattern":"^\\/NotFound\\/?$","segments":[[{"content":"NotFound","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/NotFound.astro","pathname":"/NotFound","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/components/shared/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/auth/login.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/auth/login@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/[team].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/[team]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/jugadores/analisis-video.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/jugadores/analisis-video@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/jugadores/estadisticas.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/jugadores/estadisticas@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/jugadores/jugador/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/jugadores/jugador/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/jugadores/jugador/heatmap/[heatmap].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/jugadores/jugador/heatmap/[heatmap]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/equipo/jugadores/registrar-jugador.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipo/jugadores/registrar-jugador@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/AccessDenied@_@astro":"pages/accessdenied.astro.mjs","\u0000@astro-page:src/pages/auth/login@_@astro":"pages/auth/login.astro.mjs","\u0000@astro-page:src/pages/equipo/equipos@_@astro":"pages/equipo/equipos.astro.mjs","\u0000@astro-page:src/pages/equipo/jugadores/analisis-video@_@astro":"pages/equipo/jugadores/analisis-video.astro.mjs","\u0000@astro-page:src/pages/equipo/jugadores/estadisticas@_@astro":"pages/equipo/jugadores/estadisticas.astro.mjs","\u0000@astro-page:src/pages/equipo/jugadores/jugador/heatmap/[heatmap]@_@astro":"pages/equipo/jugadores/jugador/heatmap/_heatmap_.astro.mjs","\u0000@astro-page:src/pages/equipo/jugadores/jugador/[id]@_@astro":"pages/equipo/jugadores/jugador/_id_.astro.mjs","\u0000@astro-page:src/pages/equipo/jugadores/registrar-jugador@_@astro":"pages/equipo/jugadores/registrar-jugador.astro.mjs","\u0000@astro-page:src/pages/equipo/[team]@_@astro":"pages/equipo/_team_.astro.mjs","\u0000@astro-page:src/pages/NotFound@_@astro":"pages/notfound.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_9KxlBWe2.mjs","C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/node_modules/.pnpm/node-fetch-native@1.6.7/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs":"chunks/multipart-parser_B-ZtXriq.mjs","@components/buttons/ToggleButton":"_astro/ToggleButton.1dHDKL1Y.js","@astrojs/solid-js/client.js":"_astro/client.DMxxrBqp.js","C:/Users/Usuario/Desktop/projects/proyecto-capstone-front/node_modules/.pnpm/astro@5.13.7_@netlify+blobs_626c8b0b7541924661bdcfa32bbfb146/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/arrow_next_right.fyKZfEXa.svg","/_astro/not_found.CXWxxEay.svg","/_astro/upload_icon.49JSZlWg.svg","/_astro/arrow_next_left.CBzXydCh.svg","/_astro/delete_icon.SzoNM2Aw.svg","/_astro/edit_icon.B98Ym7mn.svg","/_astro/logo_udla_corto.BEKwOSWh.png","/_astro/_id_.DD2FC-um.css","/favicon.svg","/_astro/client.DMxxrBqp.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","/_astro/ToggleButton.1dHDKL1Y.js","/_astro/web.DixykIey.js","/AccessDenied/index.html","/auth/login/index.html","/equipo/equipos/index.html","/equipo/jugadores/analisis-video/index.html","/equipo/jugadores/estadisticas/index.html","/equipo/jugadores/registrar-jugador/index.html","/NotFound/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"FRO2e6BsIrpKO8lAaRexyrErYXDaMTzWWsgJANnSfH8=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_CCAPN1aR.mjs').then(n => n.n);

export { manifest };
