export default defineNuxtRouteMiddleware(async () => {
  try {
    await $fetch('/auth/session');
    return true;
  } catch {
    return navigateTo('/error');
  }
});
