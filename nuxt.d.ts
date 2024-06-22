import { Http } from '~/utils/http/index';

declare module '#app' {
  interface NuxtApp {
    $http: Http;
  }
}
