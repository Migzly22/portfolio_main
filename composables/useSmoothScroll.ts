export const useUseSmoothScroll = (targetID : string) => {
  const element = document.getElementById(targetID);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
