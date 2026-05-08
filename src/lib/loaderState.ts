export const loaderState = {
  isLoading: true,
  listeners: new Set<(isLoading: boolean) => void>(),
  setLoading(loading: boolean) {
    this.isLoading = loading;
    this.listeners.forEach((l) => l(loading));
  },
  subscribe(listener: (isLoading: boolean) => void) {
    this.listeners.add(listener);
    listener(this.isLoading);
    return () => this.listeners.delete(listener);
  }
};
