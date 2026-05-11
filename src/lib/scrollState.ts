export const scrollState = {
  isFooterVisible: false,
  listeners: new Set<(isVisible: boolean) => void>(),
  setFooterVisible(visible: boolean) {
    if (this.isFooterVisible !== visible) {
      this.isFooterVisible = visible;
      this.listeners.forEach((l) => l(visible));
    }
  },
  subscribe(listener: (isVisible: boolean) => void) {
    this.listeners.add(listener);
    listener(this.isFooterVisible);
    return () => {
      this.listeners.delete(listener);
    };
  }
};
