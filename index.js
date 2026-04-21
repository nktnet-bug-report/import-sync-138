const { performance: perfHooksPerformance } = require("perf_hooks");

const { createJiti } = require("jiti");
const jiti = createJiti(__filename);

const beforeTime = perfHooksPerformance.now();
const k8s = jiti("@kubernetes/client-node");
const importTime = perfHooksPerformance.now() - beforeTime;

console.log(`importSync in ${importTime / 1000} seconds.`);
console.log("k8s key length:", Object.keys(k8s).length);
