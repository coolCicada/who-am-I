import { getCurrentInstance } from "vue";

// 访问 store
export const useStore = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("must be called in setup");
  return vm.proxy.$store;
};
// 访问 router
export const useRouter = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("must be called in setup");
  return vm.proxy.$router;
};
// 访问 route
export const useRoute = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("must be called in setup");
  return vm.proxy.$route;
};
